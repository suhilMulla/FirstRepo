package Exception;

public class Test {

	public static void main(String[] args) {
		
		Gen x = new Gen();
		x.Method1();
		x.Method2();
		try
		{
			x.Method3();
		}catch(Exception e)
		{
			System.out.println("Throw Exception");
		}
		
		try
		{
			x.CheckAge(12);
			
		}catch(InvalidAgeException e)
		{
			System.out.println(e);
		}

	}

}
