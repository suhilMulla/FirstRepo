package Streams;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Test {

	public static void main(String[] args) {
		
		List<Product> ls = new ArrayList<Product>();
		List<String> n = new ArrayList<String>();
		List<Float> m = new ArrayList<Float>();
		
		Product p1 = new Product(11, "Bread", 30);
		Product p2 = new Product(22, "Butter", 50);
		Product p3 = new Product(33, "Cake", 50);
		ls.add(p1);
		ls.add(p2);
		ls.add(p3);
		ls.add(new Product(44, "Biscuit", 25));
		ls.add(new Product(55, "Cheese",100));
		
		
		for(Product pro : ls) {
			
			System.out.println("Id: "+pro.getId()+"\t Name: "+pro.getName()+"\t Price: "+pro.getPrice());
		}
		
		System.out.println("\n");
		
		for(Product pro : ls) {
		if(pro.price > 30)
		{
			m.add(pro.price);
			n.add(pro.name);
		}
		}
			
		System.out.println(m);
		System.out.println(n);
		
		System.out.println("**********");
		System.out.println("Using Stream");
		
		List<String> ProductName = ls.stream()
				.filter(p -> p.price > 30)
				.map(p -> p.name)
				.collect(Collectors.toList());
		
		System.out.println(ProductName);
		
		System.out.println("**********");
		
		ls.stream()
		.filter(p -> p.price == 50 )
		.forEach(p -> System.out.println(p.name));
		
		System.out.println("**********");
		
		double total = ls.stream()
				.collect(Collectors.summingDouble(p -> p.price));
		System.out.println(total);
		
		System.out.println("**********");
		
		Product prods = ls.stream()
				.max((prods1,prods2) -> prods1.price < prods2.price ? 1 : -1).get();
		System.out.println("Min : "+prods.price);
		
		Product prod = ls.stream()
				.max((prod1,prod2) -> prod1.price > prod2.price ? 1 : -1).get();
		System.out.println("Max : "+prod.price);
		
		System.out.println("**********");
		
		long count = ls.stream()
				.filter(p -> p.price < 40)
				.count();
		System.out.println(count);
		
		System.out.println("**********");
		
		Set<Float> ProductList = ls.stream()
				.filter(p -> p.price < 40)
				.map(p -> p.price)
				.collect(Collectors.toSet());
		
		System.out.println(ProductList);
		
		System.out.println("**********");
		
		Map<Integer, String> ProdPriceMap = ls.stream()
				.collect(Collectors.toMap(p -> p.id, p -> p.name));
		
		System.out.println(ProdPriceMap);
		
		System.out.println("**********");
		
		List<Float> ProdList = ls.stream()
				.map(Product :: getPrice)
				.collect(Collectors.toList());
		
		System.out.println(ProdList);
	
	}

}
