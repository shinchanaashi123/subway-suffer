function boost(gl,track,z_dist) {
    const positions=[
        -0.1,0.1,0.1,
        -0.1,-0.1,0.1,
        0.1,-0.1,0.1,
        0.1,0.1,0.1,//front
        0.1,-0.1,0.1,
        0.1,0.1,0.1,
        0.1,0.1,-0.1,
        0.1,-0.1,-0.1,//right
        0.1,0.1,-0.1,
        0.1,-0.1,-0.1,
        -0.1,-0.1,-0.1,
        -0.1,0.1,-0.1,//back
        -0.1,-0.1,-0.1,
        -0.1,0.1,-0.1,
        -0.1,0.1,0.1,
        -0.1,-0.1,0.1,//left
        -0.1,0.1,0.1,
        0.1,0.1,0.1,
        0.1,0.1,-0.1,
        -0.1,0.1,-0.1,//top
        -0.1,-0.1,0.1,
        0.1,-0.1,0.1,
        0.1,-0.1,-0.1,
        -0.1,-0.1,-0.1,//bottom

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
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,
        1.0,0.0,0.0,//right
        1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0,
        -1.0,0.0,0.0, //left
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,
        0.0,0.0,-1.0,//back
        0.0,0.0,1.0,
        0.0,0.0,1.0,
        0.0,0.0,1.0,
        0.0,0.0,1.0,//fromt
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
        1.0,0.0,
        1.0,1.0,
        0.0,1.0,
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
    let s=getRandomInt(0,1)
    let texture=0
    let type=""
    if (s==0) {
        texture = loadTexture(gl,'imeges/booster.png')
        type="fly"

    }
    else if(s==1){
        texture = loadTexture(gl,'imeges/JumpBoost.png')
        type="jump"

    }
    return{
        'indices':indices,
        'vertaxCount':36,
        'positions':positions,
       'vertexNormals':vertexNormals,
       'textureCoordinates':textureCoordinates,
       'texture':texture,
       'rotation':0,
       'translete':[
           track,-0.6,z_dist
       ],
       'speed_y':0.1,
       'type':type,

    }
}
function boost_delete(gl,object){
    let dist=-35
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
    boosts.shift()
    buffer_boost.shift()
    boosts.push(boost(gl,track,dist))

    buffer_boosts.push(initBuffers(gl,boosts[boosts.lenght-1]))

}
function boost_tick(gl,boosts,player) {
    for(let i=0;i<boosts.lenght;++i){
        boosts[i].translate[2]+=speed
        boosts[i].rotation+=0.1
        if (player.translate[0]==boosts[i].translate[0]&&(player.translate[2]-0.15<=boosts[i].translate[2]&&
            player.translate[2]+0.15>=boosts[i].translate[2]&& player.translate[1]==-0.7) {
                if (boosts[i].type=="jump") {
                    player.jumpheight=0.05
                    player.jumpboost=true
                
                setTimeout(function()
                {
                player.jumpheight=-0.15
                player.jumpboost=false
                },5000)
            }
                else if(boosts[i].type=="fly"){
                    player.jump=1
                    player.jumpheight=0.05
                    player.flyboost=true
                    setTimeout(function()
                    {
                    player.jump=-1
                    player.flyboost=false
                    },10000)
                }
                    boost_delete(gl,boosts[i])
                    i--
            } 
            else if(boosts[i].translate[2]>2){
                boost_delete(gl,boosts[i])
                i--
            }
                
            
        }    
 
    


}