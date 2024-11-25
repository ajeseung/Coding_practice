/****************************************************/
/* File: tiny.y                                     */
/* The TINY Yacc/Bison specification file           */
/* Compiler Construction: Principles and Practice   */
/* Kenneth C. Louden                                */
/****************************************************/
%{
#define YYPARSER /* distinguishes Yacc output from other code files */

#include "globals.h"
#include "util.h"
#include "scan.h"
#include "parse.h"

#define YYSTYPE TreeNode *
static char * savedName; /* for use in assignments */
static int savedNum;   
static int savedLineNo;  /* ditto */
static TreeNode * savedTree; /* stores syntax tree for later return */
static int yylex(void); // added 11/2/11 to ensure no conflict with lex
int yyerror(char* mesasge);
%}

%token IF ELSE WHILE RETURN INT VOID
%token ID NUM 
%token ASSIGN EQ NE LT LE GT GE LPAREN RPAREN LBRACE RBRACE LCURLY RCURLY SEMI COMMA
%token ERROR 

%left PLUS MINUS TIMES OVER
%nonassoc WITHOUT_ELSE
%nonassoc ELSE


%% /* Grammar for TINY */

program     : dec_list{ 
                savedTree = $1;
              } 
            ;

dec_list    : dec_list dec{
                YYSTYPE t = $1;
                if( t != NULL){
                  while (t->sibling != NULL)
                    t = t->sibling;
                  t->sibling = $2;
                  $$ = $1;
                }
                else $$ = $2;
              }
            | dec{ $$ = $1; }
            ;

dec         : var_dec{ $$ = $1; }
            | func_dec{ $$ = $1; }
            ;

id          : ID{
                savedName = copyString(tokenString);
                savedLineNo = lineno;
              }
            ;

number      : NUM{
                savedNum = atoi(tokenString);
                savedLineNo = lineno;
              }
            ;

type_spec   : INT{
                $$ = newDecNode(TypeK);
                $$ -> type = Integer;
              }
            | VOID{
                $$ = newDecNode(TypeK);
                $$ -> type = Void;
              }
            ; 

var_dec     : type_spec id SEMI{
                $$ = newDecNode(VarK);
                $$ -> child[0] = $1;
                $$ -> attr.name = savedName;
                $$ -> lineno = savedLineNo;
              } 
            | type_spec id LBRACE number{
                $$ = newExpNode(ConstK);
                $$ -> attr.val = savedNum;
              } RBRACE SEMI{
                $$ = newDecNode(ArrVarK);
                $$ -> child[0] = $1;
                $$ -> child[1] = $5;
                $$ -> type = Arr;
                $$ -> attr.name = savedName;
                $$ -> lineno = savedLineNo;
            }
            ;

func_dec    : type_spec id{
                $$ = newDecNode(FuncK);
                $$ -> attr.name = savedName;
                $$ -> lineno = savedLineNo;
                $$ -> type = $1->type;
              } 
              LPAREN params RPAREN comp_stmt{
                $$ = $3;
                $$ -> child[0] = $1;
                $$ -> child[1] = $5;
                $$ -> child[2] = $7;
              }
            ;

params      : param_list{ $$ = $1; }
            | VOID{
                $$ = newExpNode(VoidParaK);
                $$ -> child[0] = $1;
                $$ -> type = Void;
              }
            ;

param_list  : param_list COMMA param{
                YYSTYPE t = $1;
                if(t != NULL){
                  while(t->sibling != NULL)
                    t = t->sibling;
                  t->sibling = $3;
                  $$ = $1;
                }
                else $$ = $3;
              }
            | param { $$ = $1; }
            ;

param       : type_spec id{
                $$ = newExpNode(ParaK);
                $$ -> child[0] = $1;
                $$-> type = $1->type;
                $$ -> attr.name = savedName; 
              }
            | type_spec id LBRACE RBRACE{
              $$ = newExpNode(ParaK);
              $$ -> child[0] = $1;
              $$ -> type = Arr;
              $$ -> attr.name = savedName;
            }
            ;

comp_stmt   : LCURLY local_dec stmt_list RCURLY{
                $$ = newStmtNode(CompK);
                $$ -> child[0] = $2;
                $$ -> child[1] = $3;
              }
            ;

local_dec   : local_dec var_dec{
                YYSTYPE t = $1;
                if(t != NULL){
                  while(t->sibling != NULL)
                    t = t->sibling;
                  t->sibling = $2;
                  $$ = $1;
                }
                else $$ = $2;
              }
            | { $$ = NULL; }
            ;

stmt_list   : stmt_list stmt{
                YYSTYPE t = $1;
                if(t != NULL){
                  while(t->sibling != NULL)
                    t = t->sibling;
                  t->sibling = $2;
                  $$ = $1;
                }
                else $$ = $2;
              }
            | { $$ = NULL; }
            ;

stmt        : exp_stmt { $$ = $1; }
            | comp_stmt { $$ = $1; }
            | selc_stmt { $$ = $1; }
            | iter_stmt { $$ = $1; }
            | ret_stmt { $$ = $1; }
            ;

exp_stmt    : exp SEMI { $$ = $1; }
            | SEMI { $$ = NULL; }
            ;

selc_stmt   : IF LPAREN exp RPAREN stmt %prec WITHOUT_ELSE{
                $$ = newStmtNode(IfK);
                $$ -> child[0] = $3;
                $$ -> child[1] = $5;
              } 
            | IF LPAREN exp RPAREN stmt ELSE stmt{
                $$ = newStmtNode(IfElseK);
                $$ -> child[0] = $3;
                $$ -> child[1] = $5;
                $$ -> child[2] = $7;
              }
            ;

iter_stmt   : WHILE LPAREN exp RPAREN stmt{
                $$ = newStmtNode(WhileK);
                $$ -> child[0] = $3;
                $$ -> child[1] = $5;
              }
            ;

ret_stmt    : RETURN SEMI{
                $$ = newStmtNode(RetK);
                $$ -> attr.val = 0;
              }
            | RETURN exp SEMI{
                $$ = newStmtNode(RetK);
                $$ -> attr.val = 1;
                $$ -> child[0] = $2;
              }
            ;

exp         : var ASSIGN exp{
                $$ = newExpNode(AssignK);
                $$ -> child[0] = $1;
                $$ -> child[1] = $3;
              }
            | simple_exp { $$ = $1; }
            ;

var         : id {
                $$ = newExpNode(IdK);
                $$ -> attr.name = savedName;
                $$ -> type = Integer;
              }
            | id {
                $$ = newExpNode(ArrIdK);
                $$ -> attr.name = savedName;
                $$ -> type = Arr;
              } 
              LBRACE exp RBRACE{
                $$ = $2;
                $$ -> child[0] = $4;
              }
            ;

simple_exp  : add_exp relop add_exp{
                $$ = newExpNode(OpK);
                $$ -> attr.op = $2 ->attr.op;
                $$ -> child[0] = $1;
                $$ -> child[1] = $3;
              }
              | add_exp{ $$ = $1; }

relop       : LE{
                $$ = newExpNode(OpK);
                $$ ->attr.op = LE;
              }
            | LT{
                $$ = newExpNode(OpK);
                $$ ->attr.op = LT;
              }
            | GT{
                $$ = newExpNode(OpK);
                $$ ->attr.op = GT;
              }
            | GE{
                $$ = newExpNode(OpK);
                $$ ->attr.op = GE;
              }
            | EQ{
                $$ = newExpNode(OpK);
                $$ ->attr.op = EQ;
              }
            | NE{
                $$ = newExpNode(OpK);
                $$ -> attr.op = NE;
              }
            ;

add_exp     : add_exp addop term{
                $$ = $2;
                $$ -> child[0] = $1;
                $$ -> child[1] = $3;
              }
            | term { $$ = $1;}
            ;

addop       : PLUS{
                $$ = newExpNode(OpK);
                $$ -> attr.op = PLUS;
              }
            | MINUS{
                $$ = newExpNode(OpK);
                $$ -> attr.op = MINUS;
              }
            ;

term        : term mulop factor{
                $$ = $2;
                $$ -> child[0] = $1;
                $$ -> child[1] = $3;
              }
            | factor { $$ = $1; }
            ;

mulop       : TIMES{
                $$ = newExpNode(OpK);
                $$ -> attr.op = TIMES;
              }
            | OVER{
                $$ = newExpNode(OpK);
                $$ -> attr.op = OVER;
              }
            ;

factor      : LPAREN exp RPAREN{ $$ = $2; }
            | var{ $$ = $1; }
            | call{ $$ = $1; }
            | number{
                $$ = newExpNode(ConstK);
                $$ -> attr.val = savedNum;
                $$ -> type = Integer;
               }
            ;

call        : id{
                $$ = newExpNode(CallK);
                $$ -> attr.name = savedName;
              } LPAREN args RPAREN{
                $$ = $2;
                $$ -> child[0] = $4;
              }
            ;

args        : args_list{ $$ = $1; }
            | { $$ = NULL; }
            ;

args_list   : args_list COMMA exp{
                YYSTYPE t = $1;
                if(t != NULL){
                  while(t->sibling != NULL)
                    t = t->sibling;
                  t->sibling = $3;
                  $$ = $1;
                }
                else $$ = $3;
              }
            | exp{ $$ = $1; }
            ;

%%

int yyerror(char * message)
{ fprintf(listing,"Syntax error at line %d: %s\n",lineno,message);
  fprintf(listing,"Current token: ");
  printToken(yychar,tokenString);
  Error = TRUE;
  return 0;
}

/* yylex calls getToken to make Yacc/Bison output
 * compatible with ealier versions of the TINY scanner
 */
static int yylex(void)
{ return getToken(); }

TreeNode * parse(void)
{ yyparse();
  return savedTree;
}

