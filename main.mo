import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Time "mo:base/Time";
import Map "mo:base/HashMap";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import Result "mo:base/Result";
import Order "mo:base/Order";
actor Token {
  type choice ={
    refund: Bool;
    transfer: Bool;
  };
  let owner : Principal = Principal.fromText("pjmnr-43oyy-my3zk-jzemd-fiiic-s6mwl-zkync-n7d62-75dv3-urdl7-lae");
  let totalSupply : Nat = 1000000000000000;
  let symbol : Text = "ARNI";
  
  private stable var balanceEntries : [(Principal, Nat)] = [];
  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  private var choices = HashMap.HashMap<Principal, choice >(1, Principal.equal, Principal.hash);
  if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
    
  public query func balanceOf(who: Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };

    return balance;
  };
  public query func choiceof(who: Principal) : async choice {

    let choic : choice = switch (choices.get(who)) {
      case (?result) result;
    };

    return choic;
  };
  public query func getSymbol() : async Text {
    return symbol;
  };
 
  public shared(msg) func payOut() : async Text {
    Debug.print(debug_show(msg.caller));
    if (balances.get(msg.caller) == null) {
      let amount = 100;
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "Already Claimed"
    }
  };
    
  public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    if (fromBalance > amount) {
      let newFromBalance : Nat = fromBalance - amount;
      balances.put(msg.caller, newFromBalance);

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amount;
      balances.put(to, newToBalance);

      return "Success";
    } else {
      return "Insufficient Funds"
    }
    
  };
   public shared(msg) func choosetransfer () : async Text {
       
        let newchoice: choice = {
          refund = false;
          transfer = true;};
          choices.put(msg.caller,newchoice);
          return "succesfull"
    };
    public shared(msg) func chooserefund () : async Text {
       
        let newchoice: choice = {
          refund = true;
          transfer = false;};
          choices.put(msg.caller,newchoice);
          return "succesfull"
    };
  
   type PostId = Nat;

  
  type Post = {
    title : Text;
    time_created : Time.Time;
    time_updated : Time.Time;
    content : Text;
    published : Bool;
    author : Principal;
    tags : [Text];
  };

  
  type CreatePostError = {
    #UserNotAuthenticated;
    #PostNotFound;
    #EmptyTitle;
  };

 
  type GetPostError = {
    #PostNotFound;
  };

  
  type UpdatePostError = {
    #UserNotAuthenticated;
    #PostNotFound;
    #EmptyTitle;
  };

 
  type DeletePostError = {
    #UserNotAuthenticated;
  };

  
  private stable var next : PostId = 1;

 
  private stable var stablereviews : [(PostId, Post)] = [];
  let eq : (Nat, Nat) -> Bool = func(x, y) { x == y };
  private var reviews = Map.HashMap<PostId, Post>(0, eq, Hash.hash);
  let blogpost : Post = {
    time_created = Time.now();
    time_updated = Time.now();
    title = "Hello World!";
    content = "This is a sample blogpost that has been created upon canister deployment so you can see some content when you run this app locally. You should connect to edit this post or create your own posts. \n ![This is an image](https://picsum.photos/640/360)";
    published = true;
    author = Principal.fromText("2vxsx-fae");
    // Anonymous principal
    tags = ["Example", "Hello"];
  };

 reviews.put(0, blogpost);


  system func preupgrade() {
    balanceEntries := Iter.toArray(balances.entries());
    stablereviews := Iter.toArray(reviews.entries());
  };

 
  system func postupgrade() {
     balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
   reviews
 := Map.fromIter<PostId, Post>(
      stablereviews.vals(),
      10,
      eq,
      Hash.hash,
    );
    stablereviews := []; 
  };

  
  public shared (msg) func create(post : { title : Text; description : Text; content : Text; published : Bool; tags : [Text] }) : async Result.Result<(), CreatePostError> {
    
     if(Principal.isAnonymous(msg.caller)){ 
        return #err(#UserNotAuthenticated); 
    };

  
    if (post.title == "") { return #err(#EmptyTitle) };

    let postId = next;
    next += 1;  

    let blogpost : Post = {
      time_created = Time.now(); 
      time_updated = Time.now();
      title = post.title;
      content = post.content;
      published = post.published;
      author = msg.caller; 
      tags = post.tags;
    };

   reviews
.put(postId, blogpost);
    return #ok(()); 
  };

  
  public query func get(id : PostId) : async Result.Result<Post, GetPostError> {
    let post = reviews
.get(id);
    return Result.fromOption(post, #PostNotFound);
  };

  
  public shared (msg) func update(
    id : PostId,
    post : {
      title : Text;
      content : Text;
      published : Bool;
      tags : [Text];
    },
  ) : async Result.Result<(), UpdatePostError> {
    
     if(Principal.isAnonymous(msg.caller)){
        return #err(#UserNotAuthenticated); 
    };

    if (post.title == "") {
      return #err(#EmptyTitle) 
    };

    let result = reviews
.get(id); 
    switch (result) {
      case null { 
        return #err(#PostNotFound);
      };
      case (?v) { 
        let blogpost : Post = {
          time_created = v.time_created; 
          time_updated = Time.now(); 
          title = post.title; 
          content = post.content;
          published = post.published;
          author = v.author; 
          tags = post.tags;
        };
       reviews
    .put(id, blogpost);
      };
    };
    return #ok(()); 
  };

  
  public shared (msg) func delete(id : PostId) : async Result.Result<(), DeletePostError> {
     if(Principal.isAnonymous(msg.caller)){
         return #err(#UserNotAuthenticated);
     };
   reviews
.delete(id);
    return #ok(());
  };

  
  func comp((id1 : PostId, p1 : Post), (id2 : PostId, p2 : Post)) : Order.Order {
    if (id1 > id2) {
      return #less; 
    } else if (id1 < id2) {
      return #greater;
    } else {
      return #equal;
    };
  };

   public query func list_all() : async [(PostId, Post)] {
    return Array.sort(Iter.toArray(reviews.entries()), comp);
  };

  
  func published((id : PostId, p : Post)) : Bool {
    return p.published;
  };

  
  public query func list_published() : async [(PostId, Post)] {
    return Array.sort(
      Array.filter(Iter.toArray (reviews.entries()), published),
      comp,
    );
  };
};