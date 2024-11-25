datatype expr = NUM of int
              | PLUS of expr * expr
              | MINUS of expr * expr
datatype formula = TRUE
                 | FALSE
                 | NOT of formula
                 | ANDALSO of formula * formula
                 | ORELSE of formula * formula
                 | IMPLY of formula * formula
                 | LESS of expr * expr
                    (* LESS(a,b) is true if a < b *)

fun help(h:expr):int =
    case h of
        NUM(i) => i
      | PLUS(e1,e2) => help(e1) + help(e2)
      | MINUS(e1,e2) => help(e1) - help(e2)

fun eval(f:formula):bool =
    case f of 
         TRUE => true
       | FALSE => false 
       | NOT(f2) => not (eval f2)
       | ANDALSO(f1,f2) => (eval f1) andalso (eval f2)
       | ORELSE(f1,f2) => (eval f1) orelse (eval f2)
       | IMPLY(f1,f2) => (not(eval f1)) orelse (eval f2)
       | LESS(e1,e2) => if (help e1) < (help e2) 
                       then true
                       else false

(*/
type name = string
datatype metro = STATION of name
               | AREA of name * metro
               | CONNECT of metro * metro

fun save

fun checkmetro
/*)




datatype 'a lazyList = nullList
                     | cons of 'a * (unit -> 'a lazyList)

fun seq(first : int,last : int) = if first <= last
                      then cons(first,fn f => seq(first+1,last))
                      else nullList

fun infSeq(first : int) = cons(first,fn f => infSeq(first+1))

fun firstN(lazyListVal : 'a lazyList,n : int) = if n > 0
                            then 
                                case lazyListVal of 
                                    nullList => []
                                  | cons(head,tail) => head::firstN(tail(),n-1)
                            else []

fun Nth(lazyListVal : 'a lazyList,n : int) = if n > 0
                         then 
                            case lazyListVal of 
                                nullList => NONE
                              | cons(head,tail) => 
                                            if n = 1
                                            then SOME(head)
                                            else Nth(tail(),n-1)
                         else NONE

fun filterMultiples(lazyListVal : 'a lazyList,n : int) = if n > 0
                                     then 
                                        case lazyListVal of 
                                            nullList => nullList
                                          | cons(head, tail) => if head mod n = 0
                                                                then filterMultiples(tail(),n)
                                                                else cons(head, fn f => filterMultiples(tail(),n))
                                     else nullList

fun sieve(lazyListVal : int lazyList) = 
        case lazyListVal of 
            nullList => nullList
          | cons(head,tail) => cons(head,fn f => (sieve(filterMultiples(tail(),head))))

fun primes() = sieve(infSeq(2))