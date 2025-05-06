


const int JOYX_PIN = A1;
const int JOYY_PIN = A0;
const int SW_PIN = 13;
const int greenPin = 4;
const int redPin = 3;
const int buttonPin = 7;
int buttonState = 0;
int miles = 1;
bool zeroing;
bool ready = false;
const int numReadings = 10;
struct AxisReadings {
  int readIndex;
  int readings[numReadings];
  float total = 0;
  int average = 0;
  int zeroed;
} xAxisReadings, yAxisReadings;
void setup(){
  Serial.begin(9600);
  pinMode(greenPin, OUTPUT);
  pinMode(redPin, OUTPUT);
  pinMode(SW_PIN, INPUT_PULLUP);
  
  for (int i = 0; i < numReadings; i++) {
   xAxisReadings.readings[i] = yAxisReadings.readings[i] = 0;
 } 
  

}
void loop(){
  buttonState = digitalRead(buttonPin);
  int xValue = analogRead(JOYX_PIN);
  int yValue = analogRead(JOYY_PIN);

  int swValue = !digitalRead(SW_PIN);
  smoothAxis(&xAxisReadings, xValue);
  smoothAxis(&yAxisReadings, yValue);
  
  if( buttonState == HIGH)
  {
    Serial.print("jump");
  }
  
    if(Serial.available() > 0)
  {
    String msg = Serial.readStringUntil('\n');
    if (msg == "zero"){
      zeroing = true;
    }
    if (msg == "PLAY"){
      digitalWrite(greenPin, HIGH);
      digitalWrite(redPin, LOW);
    }
    if(msg == "END"){
      digitalWrite(redPin, HIGH);
      digitalWrite(greenPin, LOW);
    }
  }

  if (zeroing) {
    xAxisReadings.zeroed = xAxisReadings.average;
    yAxisReadings.zeroed = yAxisReadings.average;
    zeroing = false;
    ready = true;
  }
  if (ready){

  
    Serial.print(xAxisReadings.average - xAxisReadings.zeroed);
    Serial.print(",");
    Serial.print(yAxisReadings.average - yAxisReadings.zeroed);
    Serial.print(",");
    Serial.println(swValue);
  }
  delay(16);



}


void smoothAxis( AxisReadings *readings, int newValue) {
  int index = readings->readIndex;
 readings->total = readings->total - readings->readings[index];
 readings->readings[index] = newValue;
 readings->total += newValue;
 readings->readIndex = readings->readIndex + 1;

 if (readings->readIndex >= numReadings)
  {
    readings->readIndex = 0;
  }

  readings->average = round(readings->total / numReadings);
}