class Ball{
    constructor(canvas,radius,mass,color,x,y,dx,dy){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.radius = radius || 0;
        this.color = color;
        this.x = x || 0;
        this.y = y || 0;
        this.dx = dx || 0;
        this.dy = dy || 0;
        this.mass = mass || 1;
    }
    move(){
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(){
        this.ctx.save();
        this.ctx.translate(this.x, this.y); 
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0,2*Math.PI, false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.restore();
    }
    isCrashEdge(left,right,up,down){
        left = left || 0;
        right = right || 0;
        up = up || 0;
        down = down || 0;
        return {
            left: this.x <= left + this.radius,
            right: this.x >= this.canvas.width - right - this.radius,
            up: this.y <= up + this.radius,
            down: this.y >= this.canvas.height - down - this.radius,
            either: (this.x <= left + this.radius 
            || this.x >= this.canvas.width - right - this.radius
            || this.y <= up + this.radius
            || this.y >= this.canvas.height - down - this.radius)
        };
    }
    crashEdge(left,right,up,down){
        var cr = this.isCrashEdge(left,right,up,down);
        if (cr.left)
            this.x = this.radius + left;
        if (cr.right)
            this.x = this.canvas.width - right - this.radius;
        if (cr.up)
            this.y = this.radius + up;
        if (cr.down)
            this.y = this.canvas.height - down - this.radius;
        if (cr.left || cr.right)
            this.dx *= -1;
        if (cr.up || cr.down)
            this.dy *= -1;
    }
    isCrash(other){
        const dx1 = other.x - this.x;
        const dy1 = other.y - this.y;
        const distsq = dx1 * dx1 + dy1 * dy1;
        const radsum = this.radius + other.radius;
        return distsq <= radsum * radsum;
    }
    crash(other){
        if (!this.isCrash(other))return;
        var sp1 = new Vector(this.dx,this.dy);
        var sp2 = new Vector(other.dx,other.dy);
        var conn = new Vector(this.x - other.x,this.y - other.y);
        var norn = conn.normal();
        var nort = new Vector(-norn.y,norn.x);
        var v1n = sp1.dot(norn);
        var v1t = sp1.dot(nort);
        var v2n = sp2.dot(norn);
        var v2t = sp2.dot(nort);
        var v1nAfter = (v1n * (this.mass - other.mass) + 2 * other.mass * v2n) / (this.mass + other.mass);
        var v2nAfter = (v2n * (other.mass - this.mass) + 2 * this.mass * v1n) / (this.mass + other.mass);
        if (v1nAfter < v2nAfter)
            return;
        var v1vn = norn.mlt(v1nAfter);
        var v1vt = nort.mlt(v1t);
        var v2vn = norn.mlt(v2nAfter);
        var v2vt = nort.mlt(v2t);
        var v1v = v1vn.add(v1vt);
        var v2v = v2vn.add(v2vt);
        this.dx = v1v.x;
        this.dy = v1v.y;
        other.dx = v2v.x;
        other.dy = v2v.y;
    }
};