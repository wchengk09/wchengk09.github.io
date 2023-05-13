class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(other){
        return new Vector(this.x + other.x,this.y + other.y);
    }
    sub(other){
        return new Vector(this.x - other.x,this.y - other.y);
    }
    mlt(other){
        return new Vector(this.x * other,this.y * other);
    }
    dot(other){
        return this.x * other.x + this.y * other.y;
    }
    normal(){
        const dis = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector(this.x / dis,this.y / dis);
    }
};