package Polymorphism;

public class Test {

	public static void main(String[] args) {
		
		Automobile Au = new Automobile("Red", "Ford");
		System.out.println("____________Automobile______________\n");
		
		FourWheeler F = new FourWheeler("Red", "Ford", 4);
		System.out.println("____________FourWheeler______________\n");
		
		Car C = new Car("Red", "Ford", 4, "Audi");
		System.out.println("____________Car______________\n");
		
		Au.Run();
		
		Automobile Aut = new Car("Red", "Ford", 4, "Audi");

	}

}
