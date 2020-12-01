const _MAXNR = 10;
const _DEBUGG = true;

class MyArray{
	constructor(){
		this.data = [];
		this.data.length = _MAXNR;
		this.index = 0;
	}

	push(x){
		if(this.index < _MAXNR){
			this.data[this.index++] = x;
			(_DEBUGG) ? console.log(x + " added at position " + (this.index-1)) : null;
		}
		else{
			return false;
		}
	}

	pop(){
		if(this.index<1){
			(_DEBUGG) ? console.log("Array is empty"): null;
			return false;
		}
		else{
			this.index--;
			(_DEBUGG) ? console.log("length is now " + this.index ): null;
		}
	}

	insert(x, pos){
		(_DEBUGG) ? console.log() : null;
		if(pos>this.index || this.index>=_MAXNR){
			console.log("Error: invalid argument"); return false;
		}
		else if(pos==this.index && this.index < _MAXNR){
			(_DEBUGG) ? console.log(x + " pushed at last current position " + this.index) : null;
		}
		else
		{
			for(let i=this.index; i >= pos; i--){
				this.data[i] = this.data[i-1];
			}
			this.index++;
			this.data[pos] = x;
		}
	}

	Delete(pos){
		if(pos >= this.index || pos < 0){
			console.log("Nope")
		}
		else {
			for(let i = pos; i <= this.index; i++){
				this.data[i] = this.data[i+1];
				this.index--;
			}
		}
	}

	min(){
		if(!this.index){
			return false;
		}
		else{
			let min = this.data[0];
			for(let i = 0; i < this.index; i++){
				if(this.data[i] < min){
					min = this.data[i];
				}
				return min;
			}
		}
	}

	max(){
		if(!this.index){
			return false;
		}
		else{
			let max = this.data[0];
			for(let i = 0; i < this.index; i++){
				this.data[i] > max ? max = this.data[i] : null;
			}
			return max;
		}
	}

	mean(){
		if(!this.index){
			return false;
		}
		else{
			let sum = 0;
			for(let i = 0; i < this.index; i++){
				sum += this.data[i];
			}
			return sum/this.index;
		}
	}

	asort(){
		if(!this.index){
			return false;
		}
		else if(this.index<1){
			return true;
		}
		else{
			let sorting = true;
			while(sorting){
				sorting = false;
				for(let i = 0; i < this.index-1; i++){
					if(this.data[i] > this.data[i+1]){
						let t = this.data[i];
						this.data[i] = this.data[i + 1];
						this.data[i + 1] = t;
						sorting = true;
					}
				}
			}
		}
	}

	dsort(){
		if(!this.index){
			return false;
		}
		else if(this.index < 1){
			return true
		}
		else{
			let sorting = true;
			while(sorting){
				sorting = false;
				for(let i = 0; i < this.index-1; i++){
					if(this.data[i] < this.data[i + 1]){
						let t = this.data[i];
						this.data[i] = this.data[i + 1];
						this.data[i + 1] = t;
						sorting = true;
					}
				}
			}
		}
	}

	at(pos){
		if(pos >= this.index){
			return false;
		}
		else{
			return this.data[pos];
		}
	}

	shiftright(){
		if(this.index < 2){
			return;
		}
		let temp = this.data[this.index-1];
		for(let i = this.index-1; i > 0; i--){
			this.data[i] = this.data[i - 1];
		}
		this.data[0] = temp;
	}

	shiftleft(){
		if(this.index < 2){
			return;
		}
		let temp = this.data[0];
		for(let i = 0; i < 0; i++){
			this.data[i] = this.data(i + 1);
		}
		this.data[this.index-1] = temp;
	}
}

let data = new MyArray;
for(let i = 0; i < _MAXNR; i++){
	data.push(i);
}
data.insert(100,19);
data.insert(100,-19);

data.pop();

data.insert(-10, _MAXNR-1);

console.log(data.min());
console.log(data.max());
console.log(data.mean());
data.asort;
data.dsort;
console.log("Rotating");
for(let i = 0; i <= _MAXNR; i++){
	data.shiftright();
}