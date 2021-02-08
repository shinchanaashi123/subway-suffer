function coin(gl,initial_x,initial_z) {
    const positions=[
        -0.1,0.1,0.0015,
        -0.1,-0.1,0.0015,
        0.1,-0.1,0.0015,
        0.1,0.1,0.0015,//front
        0.1,-0.1,0.0015,
        0.1,0.1,0.0015,
        0.1,0.1,-0.0015,
        0.1,-0.1,-0.0015,//right
        0.1,0.1,-0.0015,
        0.1,-0.1,-0.0015,
        -0.1,-0.1,-0.0015,
        -0.1,0.1,-0.0015,//back
        -0.1,-0.1,-0.0015,
        -0.1,0.1,-0.0015,
        -0.1,0.1,0.0015,
        -0.1,-0.1,0.0015,//left
        -0.1,0.1,0.0015,
        0.1,0.1,0.0015,
        0.1,-0.1,-0.0015,
        -0.1,0.1,-0.0015,//top
        -0.1,-0.5,0.0015,
        0.1,-0.5,0.0015,
        0.1,-0.5,-0.0015,
        -0.1,-0.5,-0.0015,//bottom

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
    const texture=loadTexture(gl,'images/coin.jpg')
    return{
        'indices':indices,
        'vertaxCount':36,
        'positions':positions,
       'vertexNormals':vertexNormals,
       'textureCoordinates':textureCoordinates,
       'texture':texture,
       'rotation':0,
       'translete':[
           initial_x,-0.75,initial_z
       ],
       
       'type':"coins",

    }
}
function coin_delete(gl,object){
    var index=coins.indexOf(object)
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
    coins[index]=coin(gl,track,-20)
    buffer_coins[index]=initBuffers(gl,coins[index])

}
function coin_tick(gl,coins,player) {
    for(let i=0;i<coins.lenght;++i){
        coins[i].translate[2]+=speed
        coins[i].rotation-=0.1
        if (player.translate[0]==coins[i].translate[0]&&(player.translate[2]-0.15<=coins[i].translate[2]&&
            player.translate[2]+0.15>=coinss[i].translate[2])&& player.translate[i]==-0.7) {
                player.score+=1
                coin_delete(gl,coins[i])
                i--
 }   
 else if(coins[i].translate[2]>2){
     coin_delete(gl,coins[i])
     i--
 }
}
}