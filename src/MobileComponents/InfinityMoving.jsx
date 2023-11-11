import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled component for canvas
const StyledCanvas = styled.canvas`
  /* background: #383857; */
  position: absolute;
  top: -20%;
  width: 70vw;
  /* height: 80vh; */
  z-index: 5;
`;

const InfinityMoving = () => {
    const canvasRef = useRef(null);

    useEffect(() => {     
        function square(x){return x*x;}
        function leminescate_of_bernoulli(t, a) {
            var x = (a * Math.sqrt(2) * Math.cos(t)) /
                    (square(Math.sin(t)) + 1);
            var y = (a * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
                    (square(Math.sin(t)) + 1);

        /* parametric three-leaf clover
        x = Math.cos(3*t)*Math.cos(t)*a;
        y = Math.cos(3*t)*Math.sin(t)*a;
        */
        
            return [x, y];
        }
        function rotate_point(pointX, pointY, originX, originY, angle, extrude) {
        var slope = Math.atan2(pointY - originY, pointX - originX);
        pointY = originY + Math.sin(slope) * extrude;
        pointX = originX + Math.cos(slope) * extrude;
        
            angle = angle * Math.PI / 180.0;
            return {
                x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
                y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
            };
        }

        // var canvas = document.getElementsByTagName('canvas')[0];
        // var ctx = canvas.getContext('2d');
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        /*
        Some global variables
        */
        var center = [window.innerWidth / 2, window.innerHeight / 2];
        var widthOfSymbol = 160;
        var
            pi = Math.PI,
            lob = leminescate_of_bernoulli;
        /* color, maxthicknes, minthickness, maxlength*/
        var colors = [
        ["rgba(254,121,68,0.4)", 10, 5, pi/4],
        ["rgba(255,186,85,0.5)", 15, 10, pi/2],
        ["rgba(151,26,22,0.5)",  20, 8,  pi],
        ["rgba(250,250,240,0.8)", 10, 3, 1.5*pi],
        ["rgba(50,11,4,0.7)",     5, 3,  1.5*pi]
        ];

        /*
        A loop object
        */
        function InfinityLoop(){
        var pickedColor = colors[Math.round(Math.random() * (colors.length -1))];
        
        // a is for width of infinity loop inside canvas
        this.a = Math.random() * 50 + widthOfSymbol;
        //this.length = (Math.random() * 0.75 + 0.25) * pi; //Max = 2*PI
        this.length = Math.random() * pickedColor[3] + (0.25*pi);
        this.position = 1; //Math.random() * 2 * pi; //0.5 * pi;
        this.speed = (2 * pi / 100) - (Math.random() * ( pi / 200)); //speed range: 0.1 for fastest and 0.01 for slowest
        this.heightAdjust = Math.random() * 0.2 + 1;
        this.center = {
            x: Math.random() * 20 - 10 + center[0],
            y: Math.random() * 20 - 10 + center[1],
        }

        this.color = pickedColor[0];//"rgba(200, 180, 0, 0.75)";
        this.thickness = Math.random() * pickedColor[1] + pickedColor[2];
        
        this.computePath = function(start, length, a) {
            var main_points = [],
                extruded_left_points = [],
                extruded_right_points = [];
            var segments = Math.round(this.length / this.speed);
            
            var lastPoint = null;
            
            for(let i=0; i<segments; i++) {
            
            let t = this.speed * i + this.position;
            if(t > 2 * pi) t = t - 2 * pi;
            if(t < 0) t = 2 * pi - t;
            
            var main_point = lob(t, a);
                main_point[1] = main_point[1] * this.heightAdjust + this.center.y;
            var newPoint = {
                x: main_point[0] + this.center.x,
                y: main_point[1] 
            };

            if(lastPoint == null) {
                var prevPoint = lob(t - this.speed, a);
                prevPoint[1] = prevPoint[1] * this.heightAdjust + this.center.y;
                lastPoint = {x: prevPoint[0] + this.center.x, y:prevPoint[1]};
            }

            var ribbonReductionIndex = ((i / (segments / 200)));
            //ribbonReductionIndex *= (Math.cos(2*t)+1);
            var ribbonThickness = Math.sin(pi/2*(ribbonReductionIndex / 100))*this.thickness;      

            var extrudedLeftPoint = rotate_point(
                lastPoint.x, lastPoint.y, 
                newPoint.x, newPoint.y, 90, - ribbonThickness/2
            );
            extruded_left_points.push(extrudedLeftPoint);

            var extrudedRightPoint = rotate_point(
                lastPoint.x, lastPoint.y, 
                newPoint.x, newPoint.y, 90, ribbonThickness/2
            );
            extruded_right_points.push(extrudedRightPoint);
            
            lastPoint = newPoint;
            }
            var points = extruded_left_points.concat(extruded_right_points.reverse());
            
            return points;
        }
        
        this.drawPath = function() {
            var leafPath = this.computePath(
            this.position, 
            this.length, 
            this.a, 5);
            
            this.position += this.speed;
            
            ctx.fillStyle = this.color;   
            ctx.beginPath();
            ctx.moveTo(leafPath[0].x, leafPath[0].y);
            for(let i=1;i<leafPath.length;i++) {
            ctx.lineTo(leafPath[i].x, leafPath[i].y);
            }
            ctx.closePath();
            ctx.fill();
            
            if(this.position > 2 * pi) {
            this.position = this.position - 2 * pi;
            }
        }
        
        this.reposition = function(){
            this.center = {
            x: Math.random() * 20 - 10 + center[0],
            y: Math.random() * 20 - 10 + center[1],
            }

            this.a = Math.random() * 50 + widthOfSymbol
        }
        
        this.tick = function(timestamp){
            this.drawPath();
        }
        
        return this;
        }



        /*
        Get the animation started
        */
        var Scene = function(){
        
        var loops = [];
        var lastTick = 0
        
        for(var i=0; i<50; i++) {
            loops.push(new InfinityLoop());
        }
        
        var clearCanvas = function() {
            ctx.fillStyle="rgba(21, 0, 255, 0)"; //transparent canvas background
            ctx.fillRect(0,0,canvas.width,canvas.height);
        }
        
        var animate = function(timestamp) {
            /*skip frames if more than 60/second*/
            if(timestamp - lastTick < 1000/60){
            requestAnimationFrame(animate);
            return;
            }

            clearCanvas();
            for(var i=0; i<loops.length; i++) {
            loops[i].tick(timestamp);
            }


            lastTick = timestamp;
            requestAnimationFrame(animate);
        }
        
        this.run = function() {
            requestAnimationFrame(animate); 
        }
        
        this.reset = function() {
            loops = [];
            lastTick = 0
        
            for(var i=0; i<50; i++) {
            loops.push(new InfinityLoop());
            }
        }
        
        this.reposition = function() {
            for(i=0; i<loops.length; i++) {
            loops[i].reposition();
            }
        }
        
        return this;
        }


        var scene = new Scene();
        scene.run();

        const handleResize = () => {
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            center[0] = canvas.width / 2;
            center[1] = canvas.height / 2;
            widthOfSymbol = canvas.width / 6;
            scene.reposition();
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <StyledCanvas ref={canvasRef} />;
};

export default InfinityMoving;
