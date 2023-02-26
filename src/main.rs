mod other_dir;
mod same_dir;

fn main() {
    println!("main");

    same_dir::call_same_dir();
    other_dir::nested_fn::call_nested_fn();
}
