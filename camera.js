function create_camera(translate) {
    var radius=1
    var target=[0,0,-1000]
    var cameraMatrix=mat4.create()
    mat4.rotate(cameraMatrix,cameraMatrix,degToRad(0),[0,0,1])
    var position=[
        cameraMatrix[12],
        cameraMatrix[13],
        cameraMatrix[14],
    ]
    var up=[0,1,0]
    cameraMatrix=lookAt(cameraPosition,target,up)
    mat4.invert(cameraMatrix,cameraMatrix)
    return cameraMatrix
}
function lookAt(cameraPosition,target,up) {
    var zAxis=normalize(subtractVectors(cameraPosition,target))
    var xAxis=cross(up,zAxis)
    var yAxis=cross(zAxis,xAxis)
    return[
        xAxis[0],xAxis[1],xAxis[2],0,
        yAxis[0],yAxis[1],yAxis[2],0,
        zAxis[0],zAxis[1],zAxis[2],0,
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],1,
    ]
}
function subtractVectors(a,b) {
    return[a[0]-b[0],a[1]-b[1],a[2]-b[2]]
}
function normalize(v) {
    var lenght=Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    if (lenght>0.00001) {
        return[v[0]/length,v[1]/length,v[2]/length]
    }
    else
    {
        return[0,0,0]
    }
}
function cross(a,b) {
    return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]
}
