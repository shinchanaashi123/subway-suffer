function finishline(gl) {
    const positions=[
        -2.5,0.5,0.1,
        -2.5,-0.5,0.1,
        2.5,-0.5,0.1,
        2.5,0.5,0.1,//front
        2.5,-0.5,0.1,
        2.5,0.5,0.1,
        2.5,0.5,-0.1,
        2.5,-0.5,-0.1,//right
        2.5,0.5,-0.1,
        2.5,-0.5,-0.1,
       - 2.5,-0.5,-0.1,
        -2.5,0.5,-0.1,//back
        -2.5,-0.5,-0.1,
       - 2.5,0.5,-0.1,
        -2.5,0.5,0.1,
        -2.5,-0.5,0.1,//left
        -2.5,0.5,0.1,
        2.5,0.5,0.1,
        2.5,0.5,-0.1,
        -2.5,0.5,-0.1,//top
        -2.5,-0.5,0.1,
        2.5,-0.5,0.1,
        2.5,-0.5,-0.1,
        -2.5,-0.5,-0.1,//bottom

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
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,
        0.0,0.0,//front
        0.0,0.0,
        1.0,0.0,
        1.0,1.0,
        1.0,0.0,//back
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
    const texture=loadTexture(gl,'images/.png')
    return{
        'indices':indices,
        'vertaxCount':36,
        'positions':positions,
       'vertexNormals':vertexNormals,
       'textureCoordinates':textureCoordinates,
       'texture':texture,
       'rotation':0,
       'translate':[
           0,1.5,-45
       ],
       'speed_y':0.1,
       'type':"finishline",

    }
}

function finishline_tick(flag,player) {
flag.translate[2]+=speed
if (!player.translate[2]-0.15>=flag.translate[2]+0.1||player.translate[2]+0.15<=flag.translate[2]-0.1) {
    finish=1
}  

}