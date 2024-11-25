datatype pattern = Wildcard 
                 | Variable of string 
                 | UnitP
                 | ConstP of int 
                 | TupleP of pattern list
                 | ConstructorP of string * pattern

datatype valu = Const of int 
              | Unit 
              | Tuple of valu list
              | Constructor of string * valu

(* question 1 *)

fun g f1 f2 p =
    let 
	    val r = g f1 f2 
    in
	    case p of
	        Wildcard          => f1 ()
	      | Variable x        => f2 x
	      | TupleP ps         => List.foldl (fn (p,i) => (r p) + i) 0 ps
	      | ConstructorP(_,p) => r p
	      | _                 => 0
    end

fun check_pat(p) = 
    let fun list_vars (Variable x) = [x]
	      | list_vars (TupleP ps) = List.foldl (fn (p', acc) => acc @ list_vars(p')) [] ps
	      | list_vars (_) = []
	    fun has_repeats ([]) = false
	      | has_repeats (x::xs) = List.exists (fn x' => x = x') xs orelse has_repeats xs
    in
	    (not o has_repeats o list_vars) p
    end



(* question 2 *)

fun all_answers f [] = SOME []
  | all_answers f xs = 
    let fun loop(acc, []) = SOME acc
	      | loop(acc, SOME(y)::ys) = loop(acc @ y, ys)
	      | loop(acc, NONE::ys) = NONE
    in
	    loop([], map f xs)
    end	
	

fun match(v, p) = 
    case (p, v) of
	    (Wildcard, _) => SOME []
      | (Variable s, _) => SOME [(s,v)]
      | (UnitP, Unit) => SOME []
      | (ConstP cp, Const cv) => if cp = cv then SOME [] else NONE
      | (TupleP ps, Tuple vs) => if List.length ps = List.length vs 
				                 then all_answers (fn (vs',ps') => match(vs',ps')) (ListPair.zip(vs,ps))
				                 else NONE
      | (ConstructorP(s1,pp), Constructor(s2,pv)) => if s1 = s2 then match(pv,pp) else NONE
      | _ => NONE

(* question 3 *)


type name = string
datatype RSP = ROCK
             | SCISSORS
             | PAPER
datatype 'a strategy = Cons of 'a * (unit -> 'a strategy)
datatype tournament = PLAYER of name * (RSP strategy ref)
                    | MATCH of tournament * tournament
fun onlyOne(one:RSP) = Cons(one, fn() => onlyOne(one))
fun alterTwo(one:RSP, two:RSP) = Cons(one, fn() => alterTwo(two, one))
fun alterThree(one:RSP, two:RSP,three:RSP) = Cons(one, fn() => alterThree(two, three, one))

val r = onlyOne(ROCK)
val s = onlyOne(SCISSORS)
val p = onlyOne(PAPER)
val rp = alterTwo(ROCK, PAPER)
val sr = alterTwo(SCISSORS, ROCK)
val ps = alterTwo(PAPER,SCISSORS)
val srp = alterThree(SCISSORS, ROCK, PAPER)

fun next(strategyRef) =
    let val Cons(rsp, func) = !strategyRef 
    in
        strategyRef := func();
        rsp
    end

fun whosWinner(t) = 
let 
  (* 함수 next는현재 rsp 를 반환하고 다음 상태로 ref를 업데이트하는 함수 *)
  fun next(strategyRef) =
  let val Cons(rsp, func) = !strategyRef 
  in 
    strategyRef := func();
   (* 이 rsp는 func()를 통해 업데이트되기전의 값이므로 현재 rsp 정보임에 유의 *)
    rsp
  end

  (* rsp 두개를 받아 이기는 rsp option 값을 반환해주는 함수
   비기는 경우에 NONE 을 반환함 *)
  fun win_rsp (r1, r2) =
    case r1 of 
         ROCK => if r2 = ROCK
                 then NONE
                 else 
                   if r2 = SCISSORS
                   then SOME r1
                   else SOME r2
       | SCISSORS => if r2 = SCISSORS
                     then NONE
                     else 
                       if r2 = PAPER
                       then SOME r1
                       else SOME r2
       | PAPER => if r2 = PAPER
                  then NONE
                  else 
                    if r2 = ROCK
                    then SOME r1
                    else SOME r2
  (* 이긴 플레이어를 반환*)
  fun winner_one (p1, p2) =
    case (p1,p2) of 
         (PLAYER (name1,str1), PLAYER (name2, str2)) =>
         let (* 현재 rsp 정보를 받아와서 승자를 확인 *)
           val rsp1 = next(str1)
           val rsp2 = next(str2)
           val winner = win_rsp(rsp1,rsp2)
         in
           if winner = NONE
           then (* 비기는 경우에는 한번 더 진행  *)
             winner_one(p1,p2)
           else (* 승패가 난 경우에 승자 플레이어를 반환 *)
             if valOf(winner) = rsp1
             then p1
             else p2
         end
         (* p1 p2가 모두 플레이어가 되도록 전처리하여 사용하므로 예외처리  *)
       | _ => PLAYER("exception", ref r)

in
  case t of 
       MATCH (p1, p2) =>
       let 
         val win_p1 = whosWinner(p1) 
         val win_p2 = whosWinner(p2) 
       in
         winner_one(win_p1,win_p2)
       end             
     | PLAYER p => t
end