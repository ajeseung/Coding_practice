#lang racket
(provide (all-defined-out)) ;; exports the defined variables in this file.

;; definition of structures for MUPL programs - Do NOT change
(struct var  (string) #:transparent)  ;; a variable, e.g., (var "foo")
(struct int  (num)    #:transparent)  ;; a constant number, e.g., (int 17)
(struct add  (e1 e2)  #:transparent)  ;; add two expressions
(struct ifgreater (e1 e2 e3 e4)    #:transparent) ;; if e1 > e2 then e3 else e4
(struct fun  (nameopt formal body) #:transparent) ;; a recursive(?) 1-argument function
(struct call (funexp actual)       #:transparent) ;; function call
(struct mlet (var e body) #:transparent) ;; a local binding (let var = e in body) 
(struct apair (e1 e2)     #:transparent) ;; make a new pair
(struct fst  (e)    #:transparent) ;; get first part of a pair
(struct snd  (e)    #:transparent) ;; get second part of a pair
(struct aunit ()    #:transparent) ;; unit value -- good for ending a list
(struct isaunit (e) #:transparent) ;; evaluate to 1 if e is unit else 0

;; Definitions for extra requirements should be here.
(struct glet (var e body) #:transparent) ;; a global binding that overrides any local binding (similar to the following ML code: let var = e in body)

(struct num-array  (size) #:transparent)  ;; a number array  (initialized to zeroes), e.g., (num-array-var 10)
                                                     ;; e.g. (num-array 4)

(struct num-array-at   (e1 e2) #:transparent) ;; e1 evaluates to num-array and e2 evaluates to racket int (index of the value to access) index starts from 0
                                              ;; (num-array-at (num-array 4) 3)
                                              ;; (num-array-at (num-array 4) 4) ;  this should give a nice error message (like "array access out of bound")
                                              ;; (num-array-at (num-array 4) -1) ;  this should give a nice error message (like "array access out of bound")

(struct num-array-set  (e1 e2 e3) #:transparent) ;; e1 evaluates to a num-array value, e2 evaluates to racket int (index of the value to access), and e3 evaluates to a MUPL int
                                              ;; (num-array-set (num-array 4) 0 (int 42))
                                              ;; (num-array-set (num-array 4) 5 (int 42)) ; this should give a nice error message (like "array access out of bound")
                                              ;; (num-array-set (num-array 4) -1 (int 42)) ; this should give a nice error message (like "array access out of bound")


;; a closure is not in "source" programs; it is what functions evaluate to
(struct closure (env fun) #:transparent) 

;; Problem 1

;; CHANGE (put your solutions here)

(define (racketlist -> mupllist xs)
  (if (not (list? xs))
      (error "error : argument is not Racket list")
      (if(empty? xs)
         (aunit)
         (let([first (car xs)]
              [second (cdr xs)])
           (apair first(racketlist -> mupllist second)
            )
          )
       )
   )
  )

(define (mupllist->racketlist xs)
  (if (aunit? xs)
      null
      (if (not (apair? xs))
          (error "error : argument is not Mupl list")
          (let ([first (apair-e1 xs)]
                [second (apair-e2 xs)])
             (cons first (mupllist->racketlist second))
          )
      )
   )
  )

;; Problem 2

;; lookup a variable in an environment
;; Do NOT change this function
(define (envlookup env str)
  (cond [(null? env) (error "unbound variable during evaluation" str)]
        [(equal? (car (car env)) str) (cdr (car env))]
        [#t (envlookup (cdr env) str)]))

;; Do NOT change the two cases given to you.  
;; DO add more cases for other kinds of MUPL expressions.
;; We will test eval-under-env by calling it directly even though
;; "in real life" it would be a helper function of eval-exp.
(define (eval-under-env e env)
  (cond [(var? e) 
         (envlookup env (var-string e))]
        [(int? e)
         e]
        [(add? e) 
         (let ([v1 (eval-under-env (add-e1 e) env)]
               [v2 (eval-under-env (add-e2 e) env)])
           (if (and (int? v1)
                    (int? v2))
               (int (+ (int-num v1) 
                       (int-num v2)))
               (error "MUPL addition applied to non-number")))]
        ;; CHANGE add more cases here
        [(int? e) e]
        [(ifgreater? e)
         (let ([v1 (eval-under-env (ifgreater-e1 e) env)]
               [v2 (eval-under-env (ifgreater-e2 e) env)]
               )
           (if (and (int? v1) (int? v2))
               ;(let ([v3 (eval-under-env (ifgreater-e3 e) env)]
               ;      [v4 (eval-under-env (ifgreater-e4 e) env)])
                 (if (> (int-num v1) (int-num v2))
                     (eval-under-env (ifgreater-e3 e) env)
                     (eval-under-env (ifgreater-e4 e) env))
                     
               (error "MUPL ifgreater applied to e1, e2 are not integer") 
          )
           )
         ]
        [(apair? e)
         (apair (eval-under-env (apair-e1 e) env) (eval-under-env (apair-e2 e) env))
         ]
        [(fst? e)
         (let ([sub (eval-under-env (fst-e e) env)])
         (if (apair? sub)
             (apair-e1 sub)
             (error "argument is not valid : apair")
             )
           )
         ]
        [(snd? e)
         (let ([sub (eval-under-env (snd-e e) env)])
         (if (apair? sub)
             (apair-e2 sub)
             (error "argument is not valid : apair")
             )
           )
         ]
        [(aunit? e) e]
        [(isaunit? e)
         (let ([sub (eval-under-env (isaunit-e e) env)])
           (if (aunit? sub)
               (int 1)
               (int 0)
               )
           )
         ]
        [(mlet? e)
         (let ([variable (mlet-var e)]
               [exp (eval-under-env (mlet-e e) env)]
               [body (mlet-body e)]
               )
            ;(print (cons variable exp))
            (if (string? variable)
                (eval-under-env body (cons (cons variable exp) env))
                (error "first argument 'var' is not valid : string")
            )
           )
         ]
        [(fun? e)
         (let* ([f_name (fun-nameopt e)]
               [arg (fun-formal e)]
               ;[new_env (cons (cons f_name (closure env e)) env)]
               ;[body (eval-under-env (fun-body e) env)]
               )
           (cond [(and (string? f_name) (string? arg))
                   ;(closure new_env e)]
                   (closure env e)]
                  [(and (false? f_name) (string? arg))
                   (closure env e)]
                  [#t (error "arguments are not valid : string or #f")])
           )
         ]
         [(call? e) ; env for (f_name . fun_closure) pair extended when call function,,, not when evaluating fun
          (let* ([fun_closure (eval-under-env (call-funexp e) env)]
                [fun_arg (eval-under-env (call-actual e) env)]
                [function (closure-fun fun_closure)]
                [fun_env (closure-env fun_closure)]
                )
            (if (closure? fun_closure)
                (let* ([f_name (fun-nameopt function)]
                      [f_formal (fun-formal function)]
                      [f_body (fun-body function)]
                      [arg_env (cons (cons f_formal fun_arg) fun_env)]
                      [new_env (if (false? f_name)
                                   arg_env
                                   (cons (cons f_name fun_closure) arg_env))]
                      )
                    ;(print fun_closure)
                    ;(print f_body)
                    ;(print new_env)
                    (eval-under-env f_body new_env)  
                  )
                ;(print fun_closure)
                (error "first argument is not valid : closure")
                )
            )
          ]
         [(closure? e) e]
         [(glet? e)
         (let ([var1 (glet-var e)]
               [val1 (eval-under-env (glet-e e) env)]
               [body1 (glet-body e)])
           (letrec
               ([bind (lambda(genv)
                         (if (null? genv)
                             '()
                             (let ([v1 (car genv)]
                                   [v2 (cdr genv)])
                               (cond [(equal? v1 var1)
                                      (cons v1 val1)]
                                     [(closure? v2)
                                      (cons v1 (closure (bind(closure-env v2)) (closure-fun v2)))]
                                     [(pair? v1)
                                      (cons (bind v1) (bind v2))]
                                     [#t (cons v1 (bind v2))]))))])
                (eval-under-env body1 (cons (cons var1 val1) (bind env)))))]
        [(num-array? e)
         (let ([sz (num-array-size e)])
           (if (< sz 0)
               (error "num-array size cannot be negative value" e)
               (make-array-object sz)))]
        [(num-array-at? e)
         (let* ([num-arr (eval-under-env (num-array-at-e1 e) env)]
                [num-idx (num-array-at-e2 e)]
                [num-sz (if (num-array-object? num-arr) (array-length num-arr)
                            (error "wrong num-array-object" num-arr))]) 
           (if (or (< num-idx 0) (<= num-sz num-idx))
               (error "array access out of bound" e)
               (letrec ([na-at (lambda (arr idx)
                                 (if (= idx 0)
                                     (mcar arr)
                                     (na-at (mcdr arr) (- idx 1))))])
                 (na-at num-arr num-idx))))]

        [(num-array-set? e)
         (let* ([num-arr (eval-under-env (num-array-set-e1 e) env)]
                [num-idx (num-array-set-e2 e)]
                [num-val (eval-under-env (num-array-set-e3 e) env)]
                [num-sz (if (num-array-object? num-arr) (array-length num-arr)
                            (error "wrong num-array-object" num-arr))])
           (if (or (< num-idx 0) (<= num-sz num-idx))
               (error "array access out of bound" e)
               (begin
                 (set-array-val num-arr num-idx num-val)
                 num-val)))]    
        [#t (error (format "bad expression: ~v" e))]))


(define (num-array-object? v) ;; hackish implementation for num-array object testing. We assume that if a value is mpair, it is a num-array object.
  (mpair? v))

(define (array-length array)
  (if (eq? (mcdr array) null)
      1
      (+ 1 (array-length (mcdr array)))))

(define (make-array-object length)  
    (if (= length 0)
        null
        (mcons (int 0) (make-array-object (- length 1)))))

(define (set-array-val array index val)
  (if (= index 0)
      (set-mcar! array val)
      (set-array-val (mcdr array) (- index 1) val)))


;; Do NOT change
(define (eval-exp e)
  (eval-under-env e null))
        
;; Problem 3

(define (ifaunit e1 e2 e3)
  (ifgreater (isaunit e1) (int 0) e2 e3)
  )

;(struct mlet (var e body) #:transparent) ;; a local binding (let var = e in body)
;lstlst : rktlist of rktpair, element of lstlst : (rkt string . mupl exp) => pair
(define (mlet* lstlst e2)
  ;(ifaunit lstlst e2 (mlet (fst (fst lstlst)) (snd (fst lstlst)) (mlet* (snd (lstlst) e2))))
  (if (empty? lstlst)
      e2
      (let* ([first_pair (car lstlst)]
             [next_pair_list (cdr lstlst)]
             [var_pair (car first_pair)]
             [mupl_exp_pair (cdr first_pair)])
        (mlet var_pair mupl_exp_pair (mlet* next_pair_list e2)))
      )
  )

(define (ifeq e1 e2 e3 e4)
  (mlet* (list (cons "_x" e1) (cons "_y" e2))
         (ifgreater (var "_x") (var "_y") e4
                    (ifgreater (var "_y") (var "_x") e4 e3)
                    )
         )
  )

;; Problem 4
(define mupl-map
  (fun #f "fun_arg" ; fun_arg will be argument : fun, body will be function returned.
       (fun "list_iter" "mupllist"
            (ifaunit (var "mupllist") (aunit)                     
                     (apair (call (var "fun_arg") (fst (var "mupllist")))
                            (call (var "list_iter") (snd (var "mupllist"))))
            )
       )
  )
  )

(define mupl-mapAddN 
  (mlet "map" mupl-map
        (fun #f "myint"
             (call (var "map") (fun #f "element" (add (var "myint") (var "element")))) 

        )
   )
  )