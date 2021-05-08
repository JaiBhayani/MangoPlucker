
class Stone
{
	constructor(x,y, r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2

			}
		this.x=x;
		this.y=y;
		this.r = r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options );
		World.add(world, this.body);
		this.image = loadImage("stone.png");

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER)
			//strokeWeight(3);
			//fill("red")
			image(this.image,0,0,this.r*2, this.r*2);
			pop()
			
			
			
	}

}