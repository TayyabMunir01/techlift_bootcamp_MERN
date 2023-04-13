.container{
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

}

.container > select{
  height: 80%;
  width: 200px;
  font-size: 18px;
  color:olive;
}


.city{
  font-size: 32px;
  color: rgb(54, 116, 233);
  font-weight: bold;
  font-family: monospace;
}

.results{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.results>div{
  width: 400px;
  display: flex;
  justify-content: space-between;
}

.results>div>:nth-child(1){
  color:darkgrey;
}
.results>div>:nth-child(2){
  color:firebrick;
}