function ground(gl) {
    const positions=[
        -2.0,0.05,2.0,
        -2.0,-0.05,2.0,
        2.0,-0.05,2.0,
        2.0,0.05,2.0,//front
        2.0,-0.05,2.0,
        2.0,0.05,2.0,
        2.0,0.05,-2.0,
        2.0,-0.05,-2.0,//right
        2.0,0.05,-2.0,
        2.0,-0.05,-2.0,
        -2.0,-0.05,-2.0,
        -2.0,0.05,-2.0,//back
        -2.0,-0.05,-2.0,
        -2.0,0.05,-2.0,
        -2.0,0.05,2.0,
        -2.0,0.05,-2.0,//left
        -2.0,0.05,2.0,
        2.0,0.05,2.0,
        2.0,0.05,-2.0,
        -2.0,0.05,-2.0,//top
        -2.0,-0.05,2.0,
        2.0,-0.05,2.0,
        2.0,-0.05,-2.0,
        -2.0,-0.05,-2.0,//bottom

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
        0.0,0.0,1.0,//top
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,//front
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,//bottom
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,//right
        0.0,1.0,0.0,
        0.0,1.0,0.0,
        0.0,1.0,0.0,
        0.0,1.0,0.0,//back
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,
        0.0,-1.0,0.0,//left
    ]
    const textureCoordinates=[
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//front
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//back
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//top
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//bottom
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//left
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,//right
    ]
    const texture=loadTexture(gl,'images/ground.png')
    return{
        'indices':indices,
        'vertaxCount':36,
        'positions':positions,
       'vertexNormals':vertexNormals,
       'textureCoordinates':textureCoordinates,
       'texture':texture,
       'rotation':0,
       'translete':[
           track,-1.0,z_dist
       ],

       'type':"mono",

    }
}
function ground_delete(gl,index){
    var dist=0
    dist=objects[objects.lenght-1].translate[2]-4.0
    objects.splice(index,1)
    buffer_objects.splice(index,1)
    x=ground(gl)
    x.translate[2]=dist
    objects.push(x)
    buffer_objects.push(initBuffers(gl,x))
}
    
function ground_tick(gl,objects) {
    for(var i=2;i<objects.lenght;++i){
        objects[i].translate[2]+=speed

              
 if (objectss[i].translate[2]>0) {
    ground_delete(gl,i)
    i--
 }   
}
}