//windowing-system

export function Size(width=80, height=60){
    this.width=width;
    this.height=height;
}

Size.prototype.resize=function(newWidth, newHeight){
    this.width=newWidth;
    this.height=newHeight;
}

export function Position(x=0,y=0){
    this.x=x;
    this.y=y;
}

Position.prototype.move=function(newX, newY){
    this.x=newX;
    this.y=newY;
}

class ProgramWindow{
    constructor(){
        this.screenSize=new Size(800,600);
        this.size=new Size();
        this.position=new Position();
    }

    resize(size){
        if(size.width<1){
            this.size.width=1;
        }else if(this.position.x+size.width>this.screenSize.width){
            this.size.width=this.screenSize.width-this.position.x;
        }else{
            this.size.width=size.width;
        }
        if(size.height<1){
            this.size.height=1;
        }else if(this.position.y+size.height>this.screenSize.height){
            this.size.height=this.screenSize.height-this.position.y;
        }else{
            this.size.height=size.height;
        }
    }

    move(position){
        if(position.x<0){
            this.position.x=0;
        }
        else if (position.x+this.size.width>this.screenSize.width){
            this.position.x=this.screenSize.width-this.size.width;
        }
        else{
            this.position.x=position.x;
        }
        if(position.y<0){
            this.position.y=0;
        }
        else if (position.y+this.size.height>this.screenSize.height){
            this.position.y=this.screenSize.height-this.size.height;
        }
        else{
            this.position.y=position.y;
        }
    }

}

export function changeWindow(programWindow){
    programWindow.resize(400,300);
    programWindow.move(100, 150);
    return programWindow;
}