
const int JOYX_PIN = A0;
const int JOYY_PIN = A1;
const int SW_PIN = 2;
const int ledPin = 8;

const int numReadings = 10;
bool zeroing;
bool ready = false;
struct AxisReadings {
  int readIndex;
  int readings[numReadings];
  float total = 0;
  int average = 0;
  int zeroed;
} xAxisReadings, yAxisReadings;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(SW_PIN, INPUT_PULLUP);

 for (int i = 0; i < numReadings; i++) {
   xAxisReadings.readings[i] = yAxisReadings.readings[i] = 0;
 } 

}

void loop() {
  
  int xValue = analogRead(JOYX_PIN);
  int yValue = analogRead(JOYY_PIN);

  int swValue = !digitalRead(SW_PIN);
  smoothAxis(&xAxisReadings, xValue);
  smoothAxis(&yAxisReadings, yValue);



  if(Serial.available() > 0)
  {
    String msg = Serial.readStringUntil('\n');
    if (msg == "zero"){
      zeroing = true;
    }
    if (msg == "scored"){
      digitalWrite(ledPin, HIGH);
      delay(100);
      digitalWrite(ledPin, LOW);
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
