package Test;

import java.util.Scanner;

import AllMethos.Calc;

public class Test {

	public static void main(String[] args) {
		Calc cal = new Calc();
		
		System.out.println("Enter your choice: ");
		System.out.println("1 - Sum of two numbers ");
		System.out.println("2 - Simple Interest ");
		System.out.println("3 - Area of circle ");
		System.out.println("4 - Greeting ");
		
		Scanner scn = new Scanner(System.in);
		int option;
		option = scn.nextInt();
		
		switch(option)
		{
		case 1: System.out.println("Sum is: "+cal.Add(10,20));
			break;
		case 2: System.out.println("Simple interest is: "+cal.SimpleInt(1000, 5, 10));
			break;
		case 3: System.out.println("Area of Circle is: "+cal.CircleArea(5));
			break;
		case 4: System.out.println(cal.Greetings("Hello ", "Suhil"));
		 	break;
		default: System.out.println("Invalid option");
		}
	}

}
