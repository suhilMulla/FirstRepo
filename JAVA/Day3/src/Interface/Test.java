package Interface;

public class Test {

	public static void main(String[] args) {
		
		Liquid water = new Liquid();
		Milk tonedmilk = new Milk();
		Coffee latte = new Coffee();
		CoffeeMug mymug = new CoffeeMug();
		
		mymug.addLiquid(water);
		mymug.addLiquid(tonedmilk);
		mymug.addLiquid(latte);
		
		//Scannner scn = new Scanner()

	}

}
