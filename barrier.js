function barrier(gl,track,z_dist) {
    const positions=[
        -0.2,0.1,0.05,
        -0.2,-0.1,0.05,
        0.2,-0.1,0.05,
        0.2,0.1,0.05,//front
        0.2,-0.1,0.05,
        0.2,0.1,0.05,
        0.2,0.1,-0.05,
        0.2,-0.1,-0.05,//right
        0.2,0.1,-0.05,
        0.2,-0.1,-0.05,
        -0.2,-0.1,-0.05,
        -0.2,0.1,-0.05,//back
        -0.2,-0.1,-0.05,
        -0.2,0.1,-0.05,
        -0.2,0.1,0.05,
        -0.2,-0.1,0.05,//left
        -0.2,0.1,0.05,
        0.2,0.1,0.05,
        0.2,-0.1,-0.05,
        -0.2,0.1,-0.05,//top
        -0.2,-0.5,0.05,
        0.2,-0.5,0.05,
        0.2,-0.5,-0.05,
        -0.2,-0.5,-0.05,//bottom

    ]
    const indices=[
        0,1,2,0,2,3,
        4,5,6,4,6,7,
        8,9,10,8,10,11,
        12,13,14,12,14,15,
        16,17,18,16,18,19,
        20,21,22,20,22,23,
        24,25,26,24,26,27,
        28,29,30,28,30,31,
        32,33,34,32,34,35,
    ]
    const vertexNormals=[
        0.0,0.0,1.0,
        0.0,0.0,1.0,
        0.0,0.0,1.0,
        0.0,0.0,1.0,//front
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,//right
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,//back
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,//left
        0.0,1.0,0.0,
        0.0,1.0,0.0,
        0.0,1.0,0.0,
        0.0,1.0,0.0,//top
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,//bottom
    ]
    const textureCoordinates=[
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//front
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//back
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//top
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//bottom
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//left
        0.0,1.0,
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,//right
    ]
    const texture=loadTexture(gl,'images/barrier.png')
    return{
        'indices':indices,
        'vertaxCount':36,
        'positions':positions,
       'vertexNormals':vertexNormals,
       'textureCoordinates':textureCoordinates,
       'texture':texture,
       'rotation':0,
       'translete':[
           track,-0.78,z_dist
       ],
       'initial_z':z_dist,
       'type':"barricade",

    }
}
function barrier_delete(gl,object){
    var index=barriers.indexOf(object)
    var r=getRandomInt(0,2)
    let track=0
    if (r==0) {
        track=-1.05
    }
    else if (r==1) {
        track=0
    

    }
    else if (r==2) {
        track=1.05
    }
    barriers[index]=barrier(gl,track,-50)
    buffer_barriers[index]=initBuffers(gl,barriers[index])

}
function barrier_tick(gl,barriers,player,police) {
    for(let i=0;i<barriers.lenght;++i){
        barriers[i].translate[2]+=speed
        if (player.translate[0]==barriers[i].translate[0]&&!(player.translate[2]-0.15>=barriers[i].translate[2]+0.05
            ||player.translate[2]+0.15<=barriers[i].translate[2]-0.05)&& player.translate[i]==-0.7) {
                speed-=0.001
                setTimeout(function()
                {
                    speed=0.075
                    police.setback=false
                },7000)
                speed_wall_=0.01
                police.setback=true
                    if (speed<0.03) {
                        speed=0.03
                    }
                    if (speed_wall<0.05) {
                        speed_wall=0.05
                    }
                
            
        }    
 if (barriers[i].translate[2]>2) {
     barrier_delete(gl,barriers[i])
 }   
}
}