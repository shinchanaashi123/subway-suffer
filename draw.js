function clearScene(gl,translate) {
    gl.clearColor(0.52,0.8,0.97,1.0)
    gl.clearDepth(1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.depthFunc(gl.LEQUAL)
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
    const fieldOfView=45*Math.PI/180
    const aspect=gl.canvas.clientWidth/gl.canvas.clientHeigth
    const zNear=0.1
    const zFar=1000
    const projectionMatrix=mat4.create()
    mate4.perspective(projectionMatrix,
    fieldOfView,aspect,zNear,zFar)
    return projectionMatrix
}
function drawScene(gl,programInfo,buffers,deltaTime,projectionMatrix,object,texture) {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas)
    const modelViewMatrix=mat4.create()
    mat4.translate(modelViewMatrix,modelViewMatrix,object.translate)
    mat4.rotate(modelViewMatrix,modelViewMatrix,object.rotation,[0,1,0])
    const normalMatrix=mat4.create()
    mat4.invert(normalMatrix,modelViewMatrix)
    mat4.transpose(normalMatrix,normalMatrix)
    {
        const numComponents=3
        const type=gl.FLOAT
        const normalize=false
        const stride=0
        const offset=0
        gl.bindBuffer(gl.ARRAY_BUFFER,buffers.position)
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition,numComponents,type,normalize,stride,offset)
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)

    }
    {
        const numComponents=2
        const type=gl.FLOAT
        const normalize=false
        const stride=0
        const offset=0
        gl.bindBuffer(gl.ARRAY_BUFFER,buffers.textureCoord)
        gl.vertexAttribPointer(programInfo.attribLocations.textureCoord,numComponents,type,normalize,stride,offset)
        gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord)

    }
    {
        const numComponents=3
        const type=gl.FLOAT
        const normalize=false
        const stride=0
        const offset=0
        gl.bindBuffer(gl.ARRAY_BUFFER,buffers.normal)
        gl.vertexAttribPointer(programInfo.attribLocations.vertexNormal,numComponents,type,normalize,stride,offset)
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal)

    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,buffers.indices)
    gl.useProgram(programInfo.program)
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix,false,projectionMatrix)
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,false,modelViewMatrix)
    gl.uniformMatrix4fv(programInfo.uniformLocations.normalMatrix,false,normalMatrix)
    gl.activeTexture(gl.TEXTURE_2D,texture)
    gl.uniform1i(programInfo.uniformLocations.texture0,0)
    gl.uniform1i(programInfo.uniformLocations.flash,flash)
    gl.uniform1i(programInfo.uniformLocations.gray,gray)
    {
        const type=gl.UNSIGNED_SHORT
        const offset=0
        gl.drawElements(gl.TRIANGLES,object.vertexCount,type,offset)
    }
    
    

}