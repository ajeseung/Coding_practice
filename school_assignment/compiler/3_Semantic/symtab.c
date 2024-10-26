/****************************************************/
/* File: symtab.c                                   */
/* Symbol table implementation for the TINY compiler*/
/* (allows only one symbol table)                   */
/* Symbol table is implemented as a chained         */
/* hash table                                       */
/* Compiler Construction: Principles and Practice   */
/* Kenneth C. Louden                                */
/****************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "symtab.h"

/* SHIFT is the power of two used as multiplier
   in hash function  */
#define SHIFT 4

ScopeList scopes[MAX_SCOPE];
ScopeList scpStack[MAX_SCOPE];

int scp_idx = 0, scp_stack_idx = 0;
int scp_location[MAX_SCOPE];


/* the hash function */
static int hash(char *key)
{
  int temp = 0;
  int i = 0;
  while (key[i] != '\0')
  {
    temp = ((temp << SHIFT) + key[i]) % SIZE;
    ++i;
  }
  return temp;
}

void st_insert(char *name, int lineno, int loc, TreeNode *treeNode)
{
  int h = hash(name);
  ScopeList cur_scope = scp_top();
  BucketList l = cur_scope->bucket[h];
  while ((l != NULL) && (strcmp(name, l->name) != 0))
    l = l->next;
  if (l == NULL) /* variable not yet in table */
  {
    l = (BucketList)malloc(sizeof(struct BucketListRec));
    l->name = name;
    l->treeNode = treeNode;
    l->lines = (LineList)malloc(sizeof(struct LineListRec));
    l->lines->lineno = lineno;
    l->memloc = loc;
    l->lines->next = NULL;
    l->next = cur_scope->bucket[h];
    cur_scope->bucket[h] = l;
  }
} /* st_insert */

/* Function st_lookup returns the memory
 * location of a variable or -1 if not found
 */
int st_lookup(char *name)
{
  int h = hash(name);
  ScopeList cur_scp = scp_top();
  while (cur_scp != NULL)
  {
    BucketList l = cur_scp->bucket[h];
    while ((l != NULL) && (strcmp(name, l->name) != 0))
      l = l->next;
    if (l != NULL)
      return l->memloc;
    cur_scp = cur_scp->parent;
  }
  return -1;
}

int st_lookup_top(char *name)
{
  int h = hash(name);
  ScopeList cur_scp = scp_top();
  BucketList l = cur_scp->bucket[h];
  while ((l != NULL) && (strcmp(name, l->name) != 0))
    l = l->next;
  if (l != NULL)
    return l->memloc;
  return -1;
}

void add_line(char *name, int lineno)
{
  int h = hash(name);
  ScopeList cur_scp = scp_top();
  while (cur_scp != NULL)
  {
    BucketList bl = cur_scp->bucket[h];
    while ((bl != NULL) && (strcmp(name, bl->name) != 0))
      bl = bl->next;
    if (bl != NULL)
    {
      LineList ll = bl->lines;
      while (ll->next != NULL)
        ll = ll->next;

      ll->next = (LineList)malloc(sizeof(struct LineListRec));
      ll->next->lineno = lineno;
      ll->next->next = NULL;
    }
    cur_scp = cur_scp->parent;
  }
}

BucketList bk_lookup(char * name){
  int h = hash(name);
  ScopeList cur_scp = scp_top();

  while(cur_scp != NULL){ 
    BucketList cur_bucket = cur_scp->bucket[h];

    while((cur_bucket != NULL) && (strcmp(name,cur_bucket->name) != 0)) \
      cur_bucket = cur_bucket->next;

    if(cur_bucket != NULL)  
      return cur_bucket;

    cur_scp = cur_scp->parent;
  }
  return NULL;
}

ScopeList scp_create(char *name)
{
  ScopeList newScope;
  newScope = (ScopeList)malloc(sizeof(struct ScopeListRec));
  newScope->name = name;
  newScope->parent = scp_top();
  newScope->depth = scp_stack_idx;
  scopes[scp_idx++] = newScope;

  return newScope;
}

ScopeList scp_top()
{
  if (scp_stack_idx > 0)
    return scpStack[scp_stack_idx - 1];
  return NULL;
}

void scp_push(ScopeList scope)
{
  scpStack[scp_stack_idx] = scope;
  scp_location[scp_stack_idx++] = 0;
}

void scp_pop()
{
  if (scp_stack_idx > 0)
    scp_stack_idx--;
}

int location_add()
{
  return scp_location[scp_stack_idx - 1]++;
}

/* Procedure printSymTab prints a formatted
 * listing of the symbol table contents
 * to the listing file
 */
void printSymTab(FILE *listing)
{
  int i, j;
  fprintf(listing, "< Symbol Table > \n");
  fprintf(listing, "Symbol Name  Symbol Kind  Symbol Type  Scope Name  Location   Line Numbers\n");
  fprintf(listing, "-----------  -----------  -----------  ----------  --------   ------------\n");

  for (i = 0; i < scp_idx; i++)
  {
    ScopeList cur_scp = scopes[i];
    BucketList *bucket = cur_scp->bucket;

    for (j = 0; j < SIZE; j++)
    {
      if (bucket[j] != NULL)
      {
        BucketList cur_bucket = bucket[j];
        TreeNode *treeNode = cur_bucket->treeNode;

        while (cur_bucket != NULL)
        {
          LineList cur_line = cur_bucket->lines;
          fprintf(listing, "%-14s", cur_bucket->name);

          switch (treeNode->nodekind)
          {
          case ExpK:
            if (treeNode->kind.exp == ParaK){
              switch (treeNode->type)
              {
              case Arr:
                fprintf(listing,"%-15s", "Variable");
                fprintf(listing, "%-12s", "int[]");
                break;
              case Integer:
                fprintf(listing, "%-15s", "Variable");
                fprintf(listing, "%-12s", "int");
                break;
              default:
                break;
              }
            }
            break;
          case DecK:
            switch (treeNode->kind.dec)
            {
            case FuncK:
              fprintf(listing, "%-15s", "Function");
              switch (treeNode->type)
              {
              case Void:
                fprintf(listing, "%-12s", "void");
                break;
              case Integer:
                fprintf(listing, "%-12s", "int");
              default:
                break;
              }
              break;
            case VarK:
              fprintf(listing, "%-15s", "Variable");
              switch (treeNode->type)
              {
              case Void:
                fprintf(listing, "%-12s", "void");
                break;
              case Integer:
                fprintf(listing, "%-12s", "int");
              default:
                break;
              }
              break;
            case ArrVarK:
              fprintf(listing, "%-15s", "Variable");
              if(treeNode->type == Arr)
                fprintf(listing, "%-12s", "int[]");
              break;
            default:
              break;
            }
          default:
            break;
          }
          fprintf(listing, "%-13s", cur_scp->name);
          fprintf(listing, "%-7d", cur_bucket->memloc);
          while (cur_line != NULL)
          {
            fprintf(listing, "%4d ", cur_line->lineno);
            cur_line = cur_line->next;
          }
          fprintf(listing, "\n");
          cur_bucket = cur_bucket->next;
        }
      }
    }
  }
  fprintf(listing, "\n");
  print_FuncTab(listing);
} /* printSymTab */

void print_FuncTab(FILE *listing)
{
  int i, j, para_i, para_j;

  fprintf(listing, "< Function Table > \n");
  fprintf(listing, "Function Name  Return Type  Parameter Name  Parameter Type\n");
  fprintf(listing, "-------------  -----------  --------------  --------------\n");

  for (i = 0; i < scp_idx; i++)
  {
    ScopeList cur_scp = scopes[i];
    BucketList *bucket = cur_scp->bucket;

    for (j = 0; j < SIZE; j++)
    {
      if (bucket[j] != NULL)
      {
        BucketList cur_bucket = bucket[j];
        TreeNode *treeNode = cur_bucket->treeNode;

        while (cur_bucket != NULL)
        {
          if (treeNode->nodekind == DecK)
          {
            if (treeNode->kind.dec == FuncK)
            {
              fprintf(listing, "%-17s", cur_bucket->name);
              switch (treeNode->type)
              {
              case Void:
                fprintf(listing, "%-14s", "void");
                break;
              case Integer:
                fprintf(listing, "%-14s", "int");
                break;
              default:
                break;
              }

              int no_parameter = 1;
              for (para_i = 0; para_i < scp_idx; para_i++)
              {
                ScopeList para_scp = scopes[para_i];
                if (strcmp(para_scp->name, cur_bucket->name) != 0)
                  continue;
                BucketList *para_bucket = para_scp->bucket;

                for (para_j = 0; para_j < SIZE; para_j++)
                {
                  if (para_bucket[para_j] != NULL)
                  {
                    BucketList cur_para_bucket = para_bucket[para_j];
                    TreeNode *paraNode = cur_para_bucket->treeNode;

                    while (cur_para_bucket != NULL)
                    {
                      switch (paraNode->kind.exp)
                      {
                      case ParaK:
                        no_parameter = 0;
                        fprintf(listing, "\n");
                        fprintf(listing, "%-34s", "");
                        fprintf(listing, "%-12s", cur_para_bucket->name);
                        switch (paraNode->type)
                        {
                        case Integer:
                          fprintf(listing, "%-14s", "int");
                          break;
                        case Arr:
                          fprintf(listing, "%-14s", "int[]");
                          break;
                        default:
                          break;
                        }
                        break;
                      default:
                        break;
                      }
                      cur_para_bucket = cur_para_bucket->next;
                    }
                  }
                }
              }
              if (no_parameter)
              {
                fprintf(listing, "%-15s", "");
                if (strcmp(cur_bucket->name, "output") != 0)
                  fprintf(listing, "%-16s", "void");
                else{
                  fprintf(listing, "\n%-34s", "");
                  fprintf(listing, "%-74s", "int");
                }
              }
              fprintf(listing, "\n");
            }
          }
          cur_bucket = cur_bucket->next;
        }
      }
    }
  }
  fprintf(listing, "\n");
  print_GSymTab(listing);
}

void print_GSymTab(FILE *listing)
{
  int i, j;
  fprintf(listing, "< Global Symbols >\n");
  fprintf(listing, "Symbol Name  Symbol Kind  Symbol Type\n");
  fprintf(listing, "-----------  -----------  -----------\n");

  for (i = 0; i < scp_idx; i++)
  {
    ScopeList cur_scp = scopes[i];
    if (strcmp(cur_scp->name, "global") != 0)
      continue;
    BucketList *bucket = cur_scp->bucket;

    for (j = 0; j < SIZE; j++)
    {
      if (bucket[j] != NULL)
      {
        BucketList cur_bucket = bucket[j];
        TreeNode *treeNode = cur_bucket->treeNode;

        while (cur_bucket != NULL)
        {
          if (treeNode->nodekind == DecK)
          {
            fprintf(listing, "%-14s", cur_bucket->name);

            switch (treeNode->kind.dec)
            {
            case FuncK:
              fprintf(listing, "%-14s", "Function");
              switch (treeNode->type)
              {
              case Void:
                fprintf(listing, "%-14s", "void");
                break;
              case Integer:
                fprintf(listing, "%-14s", "int");
                break;
              default:
                break;
              }
              break;
            case VarK:
              fprintf(listing, "%-14s", "Variable");
              // no void global variable
              fprintf(listing, "%-14s", "int");
              break;
            case ArrVarK:
              fprintf(listing, "%-14s", "Variable");
              fprintf(listing, "%-14s", "int[]");
              break;
            default:
              break;
            }
            fprintf(listing, "\n");
          }
          cur_bucket = cur_bucket->next;
        }
      }
    }
  }
  fprintf(listing, "\n");
  print_Scopes(listing);
}

void print_Scopes(FILE *listing)
{
  int i, j;
  fprintf(listing, "< Scopes >\n");
  fprintf(listing, "Scope Name  Nested Level  Symbol Name  Symbol Type\n");
  fprintf(listing, "----------  ------------  -----------  -----------\n");

  for (i = 0; i < scp_idx; i++)
  {
    ScopeList cur_scp = scopes[i];
    if (strcmp(cur_scp->name, "global") == 0)
      continue;
    BucketList *bucket = cur_scp->bucket;
    int no_parameter = 1;

    for (j = 0; j < SIZE; j++)
    {
      if (bucket[j] != NULL)
      {
        BucketList cur_bucket = bucket[j];
        TreeNode *treeNode = bucket[j]->treeNode;
        while (cur_bucket != NULL)
        {
          switch (treeNode->nodekind)
          {
          case DecK:
            no_parameter = 0;
            fprintf(listing, "%-16s", cur_scp->name);
            fprintf(listing, "%-14d", cur_scp->depth);
            switch (treeNode->kind.dec)
            {
            case VarK:
              fprintf(listing, "%-15s", treeNode->attr.name);
              fprintf(listing, "%-14s", "int");
              break;
            case ArrVarK:
              fprintf(listing, "%-14s", treeNode->attr.name);
              fprintf(listing, "%-14s", "int[]");
              break;
            default:
              break;
            }
            fprintf(listing, "\n");
            break;
          case ExpK:
            if (treeNode->kind.exp == ParaK)
            {
              no_parameter = 0;
              fprintf(listing, "%-16s", cur_scp->name);
              fprintf(listing, "%-14d", cur_scp->depth);
              switch (treeNode->type)
              {
              case Integer:
                fprintf(listing, "%-15s", treeNode->attr.name);
                fprintf(listing, "%-11s", "int");
                break;
              case Arr:
                fprintf(listing, "%-15s", treeNode->attr.name);
                fprintf(listing, "%-11s", "int[]");
                break;
              default:
                break;
              }
            }
            fprintf(listing,"\n");
            break;
          default:
            break;
          }
          cur_bucket = cur_bucket->next;
        }
      }
    }
    if(no_parameter == 0)
      fprintf(listing, "\n");
  }
}