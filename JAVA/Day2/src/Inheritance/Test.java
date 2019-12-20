package Inheritance;

public class Test {

	public static void main(String[] args) {
		Shapes s = new Shapes();
		Triangle t = new Triangle();
		Rectangle r = new Rectangle();
		
		s.display();
		s.calc_area();
		
		t.display();
		t.calc_area();
		
		r.display();
		r.calc_area();
	}

}
