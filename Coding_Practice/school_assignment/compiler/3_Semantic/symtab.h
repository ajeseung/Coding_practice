/****************************************************/
/* File: symtab.h                                   */
/* Symbol table interface for the TINY compiler     */
/* (allows only one symbol table)                   */
/* Compiler Construction: Principles and Practice   */
/* Kenneth C. Louden                                */
/****************************************************/

#ifndef _SYMTAB_H_
#define _SYMTAB_H_

#include "globals.h"


#define SIZE 211
#define MAX_SCOPE 200
/* the list of line numbers of the source
 * code in which a variable is referenced
 */
typedef struct LineListRec
{
  int lineno;
  struct LineListRec *next;
} * LineList;

/* The record in the bucket lists for
 * each variable, including name,
 * assigned memory location, and
 * the list of line numbers in which
 * it appears in the source code
 */
typedef struct BucketListRec
{
  char *name;
  TreeNode *treeNode;
  LineList lines;
  int memloc; /* memory location for variable */
  struct BucketListRec *next;
} * BucketList;

/* The record for each scope,
 * including name, its bucket,
 * and parent scppe
 */
typedef struct ScopeListRec
{
  char *name;
  BucketList bucket[SIZE];
  struct ScopeListTec *parent;
  int depth;
} * ScopeList;


/* Procedure st_insert inserts line numbers and
 * memory locations into the symbol table
 * loc = memory location is inserted only the
 * first time, otherwise ignored
 */
void st_insert( char * name, int lineno, int loc, TreeNode * treeNode );

/* Function st_lookup returns the memory 
 * location of a variable or -1 if not found
 */
int st_lookup ( char * name );
int st_lookup_top(char * name);
void add_line(char *name, int lineno);

BucketList bk_lookup(char * name);


ScopeList scp_create(char *name);
ScopeList scp_top();
void scp_push(ScopeList scope);
void scp_pop();
int location_add();


/* Procedure printSymTab prints a formatted 
 * listing of the symbol table contents 
 * to the listing file
 */
void printSymTab(FILE * listing);
void print_FuncTab(FILE *listing);
void print_GSymTab(FILE *listing);
void print_Scopes(FILE *listing);


#endif
