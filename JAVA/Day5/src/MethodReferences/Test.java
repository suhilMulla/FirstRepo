package MethodReferences;

public class Test {
	
	
		
		public void SaySomething()
		{
			System.out.println("HEY");
		}



	public static void main(String[] args) {
		
		/*Test inst = new Test();
		Sayable say1 = inst::SaySomething;
		inst.SaySomething();*/
		
		
		Sayable ins = new Test()::SaySomething;
		ins.Say();

	}

}
