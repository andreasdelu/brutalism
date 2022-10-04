import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";

export default function Canvas({ seq }) {
	const [loadPercent, setLoadPercent] = useState(0);
	const [canAnim, setCanAnim] = useState(false);
	const canvasRef = useRef(null);
	const containerRef = useRef(null);
    let context = useRef(null);
    
    let frameCount = seq.length;

    const img = new Image();

    let multiplier = 20;

    function loadAllImages(){
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = seq[i];
        }
    }

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio >= 0.7) {
                }
                else{
                }
            }
        })
    }, { threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1] })

    
    function updateImage(index){
        if (index > seq.length || index < 0) {
            return;
        }
        img.src = seq[index];
        img.onload = () => {
            context.current.drawImage(img, 0, 0);
        }
    }

    function handleScroll() {
        requestAnimationFrame(() => updateImage(Math.floor(((window.scrollY-containerRef.current.offsetTop)/window.innerHeight)*multiplier*(seq.length/140))))
    }
    
    
	useEffect(() => {
        const canvas = canvasRef.current;
        context.current = canvas.getContext("2d");
        window.addEventListener('scroll', handleScroll)
        observer.observe(canvas)
		img.src = seq[0];
        img.onload = () => {
            context.current.drawImage(img, 0, 0);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.unobserve(canvas)
        }
	}, []);

    loadAllImages()

	return (
		<div style={{height: (window.innerHeight * seq.length)/multiplier}} ref={containerRef} className="canvasScrollContainer">
			<canvas id={seq.length} width='1920' height='1080' ref={canvasRef} />
		</div>
	);
}
