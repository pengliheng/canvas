'use strict';

class Canvas {
	static default_prototype = {}
	static canvas_layer(
		canvas,
		store
	){
		//canvas 和 store--->    将canvas 以及 store 作为  全局变量
		Canvas.default_prototype.canvas = canvas
		Canvas.default_prototype.store = store
		Canvas.draw()
	}

	static draw(){
		const {
			canvas,
			store
		} = Canvas.default_prototype
		const {
			images,
			block_props
		} = store
		const ctx = canvas.getContext("2d")
		
		images.map((image,i)=>{
			const {
				element,
				x,y,
				width,
				height,
				angle
			} = image
			const rad = angle * Math.PI / 180

			ctx.save()
			ctx.translate(
				canvas.width*block_props.x,
				canvas.height*block_props.y
			) 
			ctx.scale(-1, 1)
			ctx.rotate(rad)
			ctx.strokeStyle = 'blue';

			ctx.rect(
				-width / 2,  
				-height / 2, 
				width, 
				height
			);
			ctx.stroke();
			let _x = canvas.width*block_props.x
			let _y = canvas.height*block_props.y
			console.log(
				canvas,
				ctx.isPointInPath(_x, _y)
			);




			canvas.addEventListener( "onMouseMove" , function(e){
				var mouse = {
					x : e.clientX - canvas.getBoundingClientRect().left,
					y : e.clientY - canvas.getBoundingClientRect().top
				};
				console.log(mouse);
				e.preventDefault();
			} , true)

			


			ctx.restore()
		})
	}
}

module.exports = exports = Canvas;