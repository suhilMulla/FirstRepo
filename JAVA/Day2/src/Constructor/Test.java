package Constructor;

public class Test {

	public static void main(String[] args) {
		
		//Aloevera Al = new Aloevera();
		LivingThing l=new LivingThing("red",5);
		System.out.println("-----plant---------");
		Plant p =new Plant("red",5,"Creeper",2);
		System.out.println("-----Rose---------");
		Rose r=new Rose("red",5,"Creeper",2,"Rosy");
		System.out.println("-----Aloe---------");
		Aloevera a=new Aloevera("red",5,"Creeper",2,"Bitter");
		System.out.println("-----Living thing which is plant---------");
		LivingThing l1=new Plant("red",5,"Creeper",2);
		l1.grow();
		Plant p1=new Rose("red",5,"Creeper",2,"Rosy");
		p1.grow();
		
		
		//LivingThing l = new Plant("a",8,"shrub",8);
		//Plant p = new Rose("b",5,"g",9,"sweet");
		//Plant q = new Aloevera("g",7,"j",6,"Bitter,");
		
		//LivingThing t=new LivingThing("y",8);
		
		

	}

}
