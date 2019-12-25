/*******************************************************
************ TOMASULO SIMULATOR SCRIPT FILE ************
********************************************************/

table = document.getElementById("Inst_table");
var count = 0;

class Instruction{
	constructor(name, arg1, arg2, arg3) {
		this.name = name;
		this.arg1 = arg1;
		this.arg2 = arg2;
		this.arg3 = arg3;
  	}

  	toString(){
  		if(this.arg3 == "")
  			return this.name + " " + this.arg1 + "," + this.arg2;
  		else
  			return this.name + " " + this.arg1 + "," + this.arg2 + "," + this.arg3;
  	}
}
//inserting instructions into instruction table
function createInsTable(ins1){
	var row = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	cell1.hidden=true;
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	cell1.innerHTML = ins1;
	cell2.innerHTML = ins1.toString();
	cell6.innerHTML = 0;
	cell7.innerHTML = 0;
}

//inserting values(that is the name of reservation status table) and register is
//the place in the register table on which we have to store the value.
function InsertRegister(value, register){
	table_register = document.getElementById("Register_Table");
	switch (register) {
		case 'F0':
			// statements_1
			{
				table_register.rows[1].cells[1].innerHTML=value;
				break;
			}
		case 'F2':
			// statements_1
			table_register.rows[1].cells[2].innerHTML=value;
			break;
		case 'F4':
			// statements_1
			table_register.rows[1].cells[3].innerHTML=value;
			break;
		case 'F6':
			// statements_1
			table_register.rows[1].cells[4].innerHTML=value;
			break;
		case 'F8':
			// statements_1
			table_register.rows[1].cells[5].innerHTML=value;
			break;
		case 'F10':
			// statements_1
			table_register.rows[1].cells[6].innerHTML=value;
			break;
		case 'F12':
			// statements_1
			table_register.rows[1].cells[7].innerHTML=value;
			break;
		case 'F14':
			// statements_1
			table_register.rows[1].cells[8].innerHTML=value;
			break;
		case 'F16':
			// statements_1
			table_register.rows[1].cells[9].innerHTML=value;
			break;
		case 'F18':
			// statements_1
			table_register.rows[1].cells[10].innerHTML=value;
			break;
		case 'F20':
			// statements_1
			table_register.rows[1].cells[11].innerHTML=value;
			break;
		case 'F22':
			// statements_1
			table_register.rows[1].cells[12].innerHTML=value;
			break;
		case 'F24':
			// statements_1
			table_register.rows[1].cells[13].innerHTML=value;
			break;
		case 'F26':
			// statements_1
			table_register.rows[1].cells[14].innerHTML=value;
			break;
		case 'F28':
			// statements_1
			table_register.rows[1].cells[15].innerHTML=value;
			break;
		case 'F30':
			// statements_1
			table_register.rows[1].cells[16].innerHTML=value;
			break;
		case 'F32':
			// statements_1
			table_register.rows[1].cells[17].innerHTML=value;
			break;

		default:
			// statements_def
			break;
	}
}

//getting value from register is the place in the register table from which we have to get the value.
function GetRegister(register){
	table_register = document.getElementById("Register_Table");
		switch (register) {
		case 'F0':
			{
				return table_register.rows[1].cells[1].innerHTML;
			}
		case 'F2':
			{
				return table_register.rows[1].cells[2].innerHTML;
			}
		case 'F4':
			{
				return table_register.rows[1].cells[3].innerHTML;
			}
		case 'F6':
			{
				return table_register.rows[1].cells[4].innerHTML;
			}
		case 'F8':
			{
				return table_register.rows[1].cells[5].innerHTML;
			}
		case 'F10':
			{
				return table_register.rows[1].cells[6].innerHTML;
			}
		case 'F12':
			{
				return table_register.rows[1].cells[7].innerHTML;
			}
		case 'F14':
			{
				return table_register.rows[1].cells[8].innerHTML;
			}
		case 'F16':
			{
				return table_register.rows[1].cells[9].innerHTML;
			}
		case 'F18':
			{
				return table_register.rows[1].cells[10].innerHTML;
			}
		case 'F20':
			{
				return table_register.rows[1].cells[11].innerHTML;
			}
		case 'F22':
			{
				return table_register.rows[1].cells[12].innerHTML;
			}
		case 'F24':
			{
				return table_register.rows[1].cells[13].innerHTML;
			}
		case 'F26':
			{
				return table_register.rows[1].cells[14].innerHTML;
			}
		case 'F28':
			{
				return table_register.rows[1].cells[15].innerHTML;
			}
		case 'F30':
			{
				return table_register.rows[1].cells[16].innerHTML;
			}
		case 'F32':
			{
				return table_register.rows[1].cells[17].innerHTML;
			}

		default:
			// statements_def
			break;
	}
}

//checking value from register is the place in the register table from which
//we have to check the value and we have to check that if it is the name of any from the reservations status table.
function CheckRegister(reserve){
	switch (reserve) {
		case 'Load1':
			return true;
			break;
		case 'Load2':
			return true;
			break;
		case 'Add1':
			return true;
			break;
		case 'Add2':
			return true;
			break;
		case 'Add3':
			return true;
			break;
		case 'Mult1':
			return true;
			break;
		case 'Mult2':
			return true;
			break;

		default:
			return false;
			break;
	}
}

function qEmpty(qj, qk){
	if(qj == "" && qk == ""){
		return true;
	}
	else return false;
}

// not used in code
function vEmpty(vj, vk){
	if(vj == "" && vk == ""){
		return true;
	}
	else return false;
}

//creating instructions
// instruction format
// instruction = Opcode, Operand [, Operand]
var instruction1 = new Instruction("LD" , "F6" , "32[R2]", "");
var instruction2 = new Instruction("LD" , "F2" , "44[R3]", "");
var instruction3 = new Instruction("ADD.D" , "F0" , "F2" , "F4");
var instruction4 = new Instruction("SUB.D" , "F10" , "F0" , "F6");
var instruction5 = new Instruction("MUL.D" , "F12" , "F10" , "F2");
var instruction6 = new Instruction("DIV.D" , "F14" , "F0" , "F16");
var instruction7 = new Instruction("DIV.D" , "F10" , "F6" , "F20");
var instruction8 = new Instruction("SD" , "F14" , "100[R6]" , "");
createInsTable(instruction1);
createInsTable(instruction2);
createInsTable(instruction3);
createInsTable(instruction4);
createInsTable(instruction5);
createInsTable(instruction6);
createInsTable(instruction7);
createInsTable(instruction8);

// table = instruction table
for( var i=1; i < table.rows.length; i++)
{
	//making onclick event on each of the rows so that they can be issued executed or write back
  table.rows[i].onclick = function ()
  {
  	table_reserve = document.getElementById("Reserve_Table");
		if(this.cells[5].innerHTML < 3)
			this.cells[5].innerHTML ++;
		count = this.cells[5].innerHTML;
		//count==1 is the condition for issue it will tell us that we are issuing the instruction
		// ----------------- ISSUE CODE ----------------------
		if (count == 1) {
			if(table.rows[this.rowIndex-1].cells[2].innerHTML == "X" || this.rowIndex==1){


				console.log(count);
				//controlling on the status table on issue
				x = this.cells[0].innerHTML.split(" ");
				//x[0] contains now the instruction type
				var ins_type= x[0];
				console.log(ins_type);
				var args = x[1].split(",");
				//args now contain the register values
				if (args[1].includes("[")) {
					var Regs = "Regs" + args[1].substring(args[1].length - 4, args[1].length);
					var Address = Regs + "+" + args[1].substring(0,args[1].length - 4);
					console.log(Regs);
					console.log(Address);

					//----------------------------------------------------------
					//reserving
					if(ins_type == "LD")//LOAD TYPE INSTRUCTIONS
					{
						//Reservation Status Table Entry: Load1
						if(table_reserve.rows[1].cells[1].innerHTML !="YES"){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 1;
							table_reserve.rows[1].cells[1].innerHTML="YES";
							table_reserve.rows[1].cells[2].innerHTML=ins_type;
							table_reserve.rows[1].cells[7].innerHTML=Address;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[1].cells[0].innerHTML, args[0]);

						}//Reservation Status Table Entry: Load2
						else if(table_reserve.rows[2].cells[1].innerHTML!="YES"){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 2;
							table_reserve.rows[2].cells[1].innerHTML="YES";
							table_reserve.rows[2].cells[2].innerHTML=ins_type;
							table_reserve.rows[2].cells[7].innerHTML=Address;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[2].cells[0].innerHTML, args[0]);
						}
						else{
							this.cells[5].innerHTML --;
						}
					}
					else if(ins_type == "SD")//STORE TYPE INSTRUCTIONS
					{
						//Reservation Status Table Entry: Store1
						//Reservation Status Table Entry: Store1
						if(table_reserve.rows[8].cells[1].innerHTML !="YES"){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 8;
							table_reserve.rows[8].cells[1].innerHTML="YES";
							table_reserve.rows[8].cells[2].innerHTML=ins_type;
							table_reserve.rows[8].cells[7].innerHTML=Address;
							if(CheckRegister(GetRegister(args[0])))
							{
								table_reserve.rows[8].cells[5].innerHTML=GetRegister(args[0]);
							}
							else
							{
								table_reserve.rows[8].cells[3].innerHTML=GetRegister(args[0]);
							}

						}//Reservation Status Table Entry: Store2
						else if(table_reserve.rows[9].cells[1].innerHTML!="YES"){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 9;
							table_reserve.rows[9].cells[1].innerHTML="YES";
							table_reserve.rows[9].cells[2].innerHTML=ins_type;
							table_reserve.rows[9].cells[7].innerHTML=Address;

							if(CheckRegister(GetRegister(args[0])))
							{
								table_reserve.rows[9].cells[5].innerHTML=GetRegister(args[0]);
							}
							else
							{
								table_reserve.rows[9].cells[3].innerHTML=GetRegister(args[0]);
							}
						}
						else{
							this.cells[5].innerHTML --;
						}

					}
				}
				else {
					if(ins_type == 'ADD.D' || ins_type == 'SUB.D')//ADD OR SUB TYPE INSTRUCTIONS
					{
						//Reservation Status Table Entry: Add1
					if(table_reserve.rows[3].cells[1].innerHTML !="YES" ){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 3;
							table_reserve.rows[3].cells[1].innerHTML="YES";
							table_reserve.rows[3].cells[2].innerHTML=ins_type;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[3].cells[0].innerHTML, args[0]);

							// checking the value of the arg1 i.e if F0,F2,F4 are agrguments then we are checking F2 value in register table
							// if it is load is checked in CheckRegister() function which returns the boolean for that if it is the name of any
							// reservation stations then we will put them to Qj but if not then we will put it to Vj
							// Same case pplies for the args[2] for which we are checking and putting it in Qk or Vk
							if(CheckRegister(GetRegister(args[1])))
							{
								table_reserve.rows[3].cells[5].innerHTML=GetRegister(args[1]);
							}
							else
							{
								table_reserve.rows[3].cells[3].innerHTML=(args[1]);
							}
							if(CheckRegister(GetRegister(args[2])))
							{
								table_reserve.rows[3].cells[6].innerHTML=GetRegister(args[2]);
							}
							else
							{
								table_reserve.rows[3].cells[4].innerHTML=(args[2]);
							}
					}//Reservation Status Table Entry: Add2
					else if(table_reserve.rows[4].cells[1].innerHTML !="YES"){
						this.cells[2].innerHTML = 'X';
						this.cells[6].innerHTML = 4;
							table_reserve.rows[4].cells[1].innerHTML="YES";
							table_reserve.rows[4].cells[2].innerHTML=ins_type;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[4].cells[0].innerHTML, args[0]);

							// checking the value of the arg1 i.e if F0,F2,F4 are agrguments then we are checking F2 value in register table
							// if it is load is checked in CheckRegister() function which returns the boolean for that if it is the name of any
							// reservation stations then we will put them to Qj but if not then we will put it to Vj
							// Same case pplies for the args[2] for which we are checking and putting it in Qk or Vk
							if(CheckRegister(GetRegister(args[1])))
							{
								table_reserve.rows[4].cells[5].innerHTML=GetRegister(args[1]);
							}
							else
							{
								table_reserve.rows[4].cells[3].innerHTML=(args[1]);
							}
							if(CheckRegister(GetRegister(args[2])))
							{
								table_reserve.rows[4].cells[6].innerHTML=GetRegister(args[2]);
							}
							else
							{
								table_reserve.rows[4].cells[4].innerHTML=(args[2]);
							}
					}//Reservation Status Table Entry: Add3
					else if(table_reserve.rows[5].cells[1].innerHTML !="YES"){
						this.cells[2].innerHTML = 'X';
						this.cells[6].innerHTML = 5;
							table_reserve.rows[5].cells[1].innerHTML="YES";
							table_reserve.rows[5].cells[2].innerHTML=ins_type;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[5].cells[0].innerHTML, args[0]);

							// checking the value of the arg1 i.e if F0,F2,F4 are agrguments then we are checking F2 value in register table
							// if it is load is checked in CheckRegister() function which returns the boolean for that if it is the name of any
							// reservation stations then we will put them to Qj but if not then we will put it to Vj
							// Same case pplies for the args[2] for which we are checking and putting it in Qk or Vk
							if(CheckRegister(GetRegister(args[1])))
							{
								table_reserve.rows[5].cells[5].innerHTML=GetRegister(args[1]);
							}
							else
							{
								table_reserve.rows[5].cells[3].innerHTML=(args[1]);
							}
							if(CheckRegister(GetRegister(args[2])))
							{
								table_reserve.rows[5].cells[6].innerHTML=GetRegister(args[2]);
							}
							else
							{
								table_reserve.rows[5].cells[4].innerHTML=(args[2]);
							}
					}
					else{
							this.cells[5].innerHTML --;
						}

					}
					else if (ins_type == 'MUL.D' || ins_type == 'DIV.D') {
						//Reservation Status Table Entry: Mult1
						if(table_reserve.rows[6].cells[1].innerHTML !="YES" ){
							this.cells[2].innerHTML = 'X';
							this.cells[6].innerHTML = 6;
							table_reserve.rows[6].cells[1].innerHTML="YES";
							table_reserve.rows[6].cells[2].innerHTML=ins_type;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[6].cells[0].innerHTML, args[0]);

							// checking the value of the arg1 i.e if F0,F2,F4 are agrguments then we are checking F2 value in register table
							// if it is load is checked in CheckRegister() function which returns the boolean for that if it is the name of any
							// reservation stations then we will put them to Qj but if not then we will put it to Vj
							// Same case pplies for the args[2] for which we are checking and putting it in Qk or Vk
							if(CheckRegister(GetRegister(args[1])))
							{
								table_reserve.rows[6].cells[5].innerHTML=GetRegister(args[1]);
							}
							else
							{
								table_reserve.rows[6].cells[3].innerHTML=(args[1]);
							}
							if(CheckRegister(GetRegister(args[2])))
							{
								table_reserve.rows[6].cells[6].innerHTML=GetRegister(args[2]);
							}
							else
							{
								table_reserve.rows[6].cells[4].innerHTML=(args[2]);
							}
						}//Reservation Status Table Entry: Mult2
					else if(table_reserve.rows[7].cells[1].innerHTML !="YES"){
						this.cells[2].innerHTML = 'X';
						this.cells[6].innerHTML = 7;
							table_reserve.rows[7].cells[1].innerHTML="YES";
							table_reserve.rows[7].cells[2].innerHTML=ins_type;

							//inserting the value in the register table
							InsertRegister(table_reserve.rows[7].cells[0].innerHTML, args[0]);

							// checking the value of the arg1 i.e if F0,F2,F4 are agrguments then we are checking F2 value in register table
							// if it is load is checked in CheckRegister() function which returns the boolean for that if it is the name of any
							// reservation stations then we will put them to Qj but if not then we will put it to Vj
							// Same case pplies for the args[2] for which we are checking and putting it in Qk or Vk
							if(CheckRegister(GetRegister(args[1])))
							{
								table_reserve.rows[7].cells[5].innerHTML=GetRegister(args[1]);
							}
							else
							{
								table_reserve.rows[7].cells[3].innerHTML=(args[1]);
							}
							if(CheckRegister(GetRegister(args[2])))
							{
								table_reserve.rows[7].cells[6].innerHTML=GetRegister(args[2]);
							}
							else
							{
								table_reserve.rows[7].cells[4].innerHTML=(args[2]);
							}
					}
					else{
							this.cells[5].innerHTML --;
						}
					}

			}
				}
				else{
					this.cells[5].innerHTML --;
				}
		}	// count == 1 ends
		// ----------------- EXECUTE CODE ----------------------
		else if(count == 2){
			var instruction = this.cells[1].innerHTML.split(' ');
			console.log(instruction);

			opcode = instruction[0];
			operand = instruction[1].split(',');

			console.log(opcode);
			console.log(operand);

			op1 = operand[0];
			// basically destination for instructions
			// except store

			if(opcode == 'LD' || opcode == 'SD'){
				// operand[1] = memory Address
				// example: 100[R2]
				openSqrIndex = operand[1].indexOf('[');
				closeSqrIndex = operand[1].indexOf(']');

				regname = operand[1].substring(openSqrIndex+1, closeSqrIndex);
				address = operand[1].substring(0, openSqrIndex);

				console.log(regname);	// example: R2
				console.log(address);	// example: 100

				if(opcode == 'LD'){
					// Load Instructions won`t wait for any Register
					// since they dont depend on any register
					// will be executed right away after issuing
					this.cells[3].innerHTML = 'X';
				}
				else if(opcode == 'SD'){
					var stationNumber = this.cells[6].innerHTML;
					console.log("station index: " + stationNumber);
					qj = table_reserve.rows[stationNumber].cells[5].innerHTML;
					qk = table_reserve.rows[stationNumber].cells[6].innerHTML;
					console.log("Qj: " + qj + ", Qk: " + qk);
					if(qEmpty(qj, qk)){
						console.log("qEmpty: true");
						this.cells[3].innerHTML = 'X';
					}
					else{
						this.cells[5].innerHTML --;
					}
				}
			} // (opcode == 'LD' || opcode == 'SD') ends
			else{ // not LD or SD instructions
				op2 = operand[1];
				op3 = operand[2];

				console.log(op1 + " " + op2 + " " + op3);

				var stationNumber = this.cells[6].innerHTML;

				console.log("station index: " + stationNumber);

				qj = table_reserve.rows[stationNumber].cells[5].innerHTML;
				qk = table_reserve.rows[stationNumber].cells[6].innerHTML;

				if(qEmpty(qj, qk)){
					this.cells[3].innerHTML = 'X';
				}
				else{
					this.cells[5].innerHTML --;
				}
			}
		}// count == 2 ends here
		// ----------------- WRITEBACK CODE ----------------------
		else if(count == 3){
			var instruction = this.cells[1].innerHTML.split(' ');
			console.log(instruction);

			opcode = instruction[0];
			operand = instruction[1].split(',');

			console.log(opcode);
			console.log(operand);

			if(this.cells[4].innerHTML != 'X'){
				this.cells[4].innerHTML = 'X';

				op1 = operand[0];
				stationName = GetRegister(op1);

				console.log(stationName);
				InsertRegister("", op1);

				if(opcode != 'SD'){
					// no need to update the table on STORE
					// since the value is going to memory
					// op1 is source, not destination in SD
					for(var i = 1; i< table_reserve.rows.length; i++){
						qj = table_reserve.rows[i].cells[5].innerHTML;
						qk = table_reserve.rows[i].cells[6].innerHTML;

						if(qj == stationName){
							table_reserve.rows[i].cells[5].innerHTML = "";

							vj = table_reserve.rows[i].cells[3].innerHTML;
							vk = table_reserve.rows[i].cells[4].innerHTML;

							if(vj == ""){
								table_reserve.rows[i].cells[3].innerHTML = op1;
							}
							else if(vk == ""){
								table_reserve.rows[i].cells[4].innerHTML = op1;
							}
						}// qj == stationName
						else if(qk == stationName){
							table_reserve.rows[i].cells[6].innerHTML = "";

							vj = table_reserve.rows[i].cells[3].innerHTML;
							vk = table_reserve.rows[i].cells[4].innerHTML;

							if(vj == ""){
								table_reserve.rows[i].cells[3].innerHTML = op1;
							}
							else if(vk == ""){
								table_reserve.rows[i].cells[4].innerHTML = op1;
							}
						} // qk == stationName
					} // for loop
				} // if opcode != 'SD
				stationNumber = this.cells[6].innerHTML;
				clearStation(stationNumber);
			} // (this.cells[4].innerHTML != 'X') ends
		}// count == 3 ends here
  } // onclick function ends here
}// loop ends here


function clearStation(station){
	for(var i = 1; i<9; i++){
		table_reserve.rows[station].cells[i].innerHTML = "";
	}
}
