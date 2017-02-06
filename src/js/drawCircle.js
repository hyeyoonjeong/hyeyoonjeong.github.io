/**
 * Created by HYEYOON on 2017-02-01.
 * Draw Circle(PieChart)
 */
function drawCircle(canvas, context, data) {
    context.save();
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = canvas.width / 2.5;

    var startingAngle = -degreesToRadians(90);
    var arcSize = degreesToRadians(data);
    var endingAngle = startingAngle + arcSize/100*360;

    context.beginPath(); // draw circle background
    context.arc(centerX, centerY, radius,
        0, 2 * Math.PI, false);
    context.fillStyle = "transparent";
    context.fill();
    context.lineWidth = 15;
    context.strokeStyle = "#F2F6FC";
    context.stroke();
    context.closePath();

    context.beginPath(); //draw circle
    context.arc(centerX, centerY, radius,
        startingAngle, endingAngle, false);
    context.fillStyle = "transparent";
    context.fill();
    context.lineWidth = 15;
    context.strokeStyle = "#b3d4fc";
    context.stroke();
    context.closePath();

    context.restore();

    drawSegmentLabel(canvas, context, data);
}
function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

function drawSegmentLabel(canvas, context, data) {
    context.save();
    var x = canvas.width / 2;
    var y = canvas.height / 2;

    context.textAlign = "center";
    var fontSize = canvas.height/12;
    context.font = fontSize + "pt Source Sans Pro";
    var text;
    if(data >= 75)
        text = "Advanced";
    else if(data >= 50 && data < 75)
        text = "Intermediate";
    else
        text = "Basic";

    context.fillText(text, x, y);
    context.restore();
}
