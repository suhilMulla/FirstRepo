package Lambda;

public class Test {

	public static void main(String[] args) {

		Calculable c = (int p, int t, int r)->((p*t*r)/100);
		System.out.println("Simple Interest: "+c.Cal(500, 5, 10));
				

	}

}
