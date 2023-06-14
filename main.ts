function Rturn (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
}
function Fwd (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, num)
}
function LDrift (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, num)
}
function Bwd (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, num)
}
function RDrift (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, num)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, num)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString.charAt(0) == "f") {
        Fwd(255)
    } else if (receivedString.charAt(0) == "b") {
        Bwd(255)
    } else if (receivedString.charAt(0) == "r") {
        RDrift(255)
    } else if (receivedString.charAt(0) == "l") {
        LDrift(255)
    } else if (receivedString.charAt(0) == "s") {
        Stop()
    }
})
function Stop () {
    motor.motorStopAll()
}
function LTurn (num: number) {
    motor.motorStopAll()
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, num)
}
radio.setGroup(1)
motor.motorStopAll()
motor.servo(motor.Servos.S1, 90)
