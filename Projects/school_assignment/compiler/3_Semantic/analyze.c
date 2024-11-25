/****************************************************/
/* File: analyze.c                                  */
/* Semantic analyzer implementation                 */
/* for the TINY compiler                            */
/* Compiler Construction: Principles and Practice   */
/* Kenneth C. Louden                                */
/****************************************************/

#include "globals.h"
#include "symtab.h"
#include "analyze.h"
#include "util.h"

/* counter for variable memory locations */
static int location = 0;
static ScopeList globalScp = NULL;
static char *name;
static int alreadyInScp = 0;

/* Procedure traverse is a generic recursive
 * syntax tree traversal routine:
 * it applies preProc in preorder and postProc
 * in postorder to tree pointed to by t
 */
static void traverse(TreeNode *t,
                     void (*preProc)(TreeNode *),
                     void (*postProc)(TreeNode *))
{
  if (t != NULL)
  {
    preProc(t);
    {
      int i;
      for (i = 0; i < MAXCHILDREN; i++)
        traverse(t->child[i], preProc, postProc);
    }
    postProc(t);
    traverse(t->sibling, preProc, postProc);
  }
}

/* nullProc is a do-nothing procedure to
 * generate preorder-only or postorder-only
 * traversals from traverse
 */
static void nullProc(TreeNode *t)
{
  if (t == NULL)
    return;
  else
    return;
}

static void postInsertion(TreeNode *t)
{
  if (t->nodekind == StmtK && t->kind.stmt == CompK)
    scp_pop();
}

static void typeError(TreeNode *t, char *message)
{
  fprintf(listing, "Error: Type error at line %d: %s\n", t->lineno, message);
  Error = TRUE;
}

static void symbolError(TreeNode *t, char *message)
{
  fprintf(listing, "Error: Symbol error at line %d: %s\n", t->lineno, message);
  Error = TRUE;
}

static void undefinedError(TreeNode *t)
{
  if (t->kind.exp == CallK)
    fprintf(listing, "Error: Undeclared Function \"%s\" at line %d\n", t->attr.name, t->lineno);
  else if (t->kind.exp == IdK)
    fprintf(listing, "Error: Undeclared Variable \"%s\" at line %d\n", t->attr.name, t->lineno);
  else if (t->kind.exp == ArrIdK)
    fprintf(listing, "Error: Undeclared Array Variable \"%s\" at line %d\n", t->attr.name, t->lineno);
  Error = TRUE;
}

static void redefinedError(TreeNode *t)
{
  if (t->kind.dec == FuncK)
    fprintf(listing, "Error: Redefined Function \"%s\" at line %d\n", t->attr.name, t->lineno);
  else if (t->kind.dec == VarK)
    fprintf(listing, "Error: Redefined Variable \"%s\" at line %d\n", t->attr.name, t->lineno);
  else if (t->kind.dec == ArrVarK)
    fprintf(listing, "Error: Redefined Array Variable \"%s\" at line %d\n", t->attr.name, t->lineno);
  Error = TRUE;
}

/* Procedure insertNode inserts
 * identifiers stored in t into
 * the symbol table
 */
static void insertNode(TreeNode *t)
{
  switch (t->nodekind)
  {
  case StmtK:
    switch (t->kind.stmt)
    {
    case CompK:
      if (alreadyInScp)
        alreadyInScp = 0;
      else
      {
        ScopeList scope = scp_create(name);
        scp_push(scope);
        location++;
      }
      t->attr.scope = scp_top();
      break;
    default:
      break;
    }
    break;
  case ExpK:
    switch (t->kind.exp)
    {
    case IdK:
    case ArrIdK:
    case CallK:
      if (st_lookup(t->attr.name) == -1)
        undefinedError(t);
      else
        /* already in table, so ignore location,
           add line number of use only */
        add_line(t->attr.name, t->lineno);
      break;
    case ParaK:
      if (st_lookup(t->attr.name) == -1)
        st_insert(t->attr.name, t->lineno, location_add(), t);
      break;
    default:
      break;
    }
    break;
  case DecK:
    switch (t->kind.dec)
    {
    case FuncK:
      name = t->attr.name;
      if (st_lookup_top(t->attr.name) >= 0)
      {
        redefinedError(t);
        break;
      }
      if (scp_top() != globalScp)
      {
        fprintf(listing, "Error: Function \"%s\" is no defined in global at line %d\n", t->attr.name, t->lineno);
        Error = TRUE;
        break;
      }
      st_insert(name, t->lineno, location_add(), t);
      ScopeList tem = scp_create(name);
      scp_push(tem);
      alreadyInScp = 1;
      break;
    case VarK:
      t->type = Integer;
      if (st_lookup_top(t->attr.name) == -1)
        st_insert(t->attr.name, t->lineno, location_add(), t);
      else
        redefinedError(t);
      break;
    case ArrVarK:
      t->type = Arr;
      if (st_lookup_top(t->attr.name) == -1)
        st_insert(t->attr.name, t->lineno, location_add(), t);
      else
        redefinedError(t);
      break;
    default:
      break;
    }
    break;
  default:
    break;
  }
}

/* Function buildSymtab constructs the symbol
 * table by preorder traversal of the syntax tree
 */
void buildSymtab(TreeNode *syntaxTree)
{
  globalScp = scp_create("global");
  scp_push(globalScp);

  TreeNode *treeFunc;
  TreeNode *treeType;
  TreeNode *treePara;
  TreeNode *treeComp;

  // input function
  treeFunc = newDecNode(FuncK);
  treeFunc->type = Integer;
  treeFunc->attr.name = "input";
  treeFunc->lineno = 0;

  treeType = newDecNode(TypeK);
  treeType->type = Integer;

  treeComp = newStmtNode(CompK);
  treeComp->child[0] = NULL;
  treeComp->child[1] = NULL;

  treePara = newExpNode(VoidParaK);
  treePara->child[0] = NULL;
  treePara->child[1] = NULL;

  treeFunc->child[0] = treeType;
  treeFunc->child[1] = treePara;
  treeFunc->child[2] = treeComp;

  st_insert("input", 0, location_add(), treeFunc);

  // output function
  treeFunc = newDecNode(FuncK);
  treeFunc->type = Void;
  treeFunc->attr.name = "output";
  treeFunc->lineno = 0;

  treeType = newDecNode(TypeK);
  treeType->type = Void;

  treePara = newExpNode(ParaK);
  treePara->attr.name = "value";
  treePara->type = Integer;

  treeComp = newStmtNode(CompK);
  treeComp->child[0] = NULL;
  treeComp->child[1] = NULL;

  treeFunc->child[0] = treeType;
  treeFunc->child[1] = treePara;
  treeFunc->child[2] = treeComp;

  st_insert("output", 0, location_add(), treeFunc);

  traverse(syntaxTree, insertNode, postInsertion);
  scp_pop();
}

static void preCheck(TreeNode *t)
{
  switch (t->nodekind)
  {
  case StmtK:
    if (t->kind.stmt == CompK)
      scp_push(t->attr.scope);
    break;
  case DecK:
    if (t->kind.dec == FuncK)
      name = t->attr.name;
    break;
  default:
    break;
  }
}

/* Procedure checkNode performs
 * type checking at a single tree node
 */
static void checkNode(TreeNode *t)
{
  switch (t->nodekind)
  {
  case StmtK:
    switch (t->kind.stmt)
    {
    case CompK:
      scp_pop();
      break;
    case IfK:
      if (t->child[0] == NULL)
        typeError(t, "expected expression");
      if (t->child[0]->type != Integer)
        typeError(t->child[0], "invalid condition");
      break;
    case IfElseK:
      if (t->child[0] == NULL)
        typeError(t, "expected expression");
      if (t->child[0]->type != Integer)
        typeError(t->child[0], "invalid condition");
      break;
    case WhileK:
      if (t->child[0] == NULL)
        typeError(t, "expected expression");
      if (t->child[0]->type != Integer)
        typeError(t, "invalid condition");
      break;
    case RetK:
    {
      TreeNode *func = bk_lookup(name)->treeNode;
      if (func->child[0]->type == Void && t->child[0] != NULL)
        typeError(t, "invalid return type");
      if (func->child[0]->type == Integer && (t->child[0] == NULL || t->child[0]->type != Integer))
        typeError(t, "invalid return type");
      break;
    }
  }
  default:
    break;
  case ExpK:
    switch (t->kind.exp)
    {
    case AssignK:
      if (t->child[0]->type == Void || t->child[1]->type == Void)
        typeError(t->child[0], "invalid variable type");
      else if (t->child[0]->type == Arr && t->child[0]->child[0] == NULL)
        typeError(t->child[0], "invalid variable type");
      else if (t->child[1]->type == Arr && t->child[1]->child[0] == NULL)
        typeError(t->child[0], "invalid variable type");
      else
        t->type = t->child[0]->type;
      break;
    case OpK:
    {
      ExpType lType, rType;
      TokenType op;
      lType = t->child[0]->type;
      rType = t->child[1]->type;
      op = t->attr.op;

      if (lType == Arr && t->child[0]->child[0] != NULL)
        lType = Integer;
      if (rType == Arr && t->child[1]->child[0] != NULL)
        rType = Integer;
      if (lType == Void || rType == Void)
        typeError(t, "void variable cannot be operated");
      else if (lType != rType)
        typeError(t, "invalid expression, types are different");
      else if (lType != Integer || rType != Integer)
        typeError(t, "invalid operand type");
      else
        t->type = Integer;
      break;
    }
    case ConstK:
      t->type = Integer;
      break;
    case IdK:
    case ArrIdK:
    {
      BucketList bucket = bk_lookup(t->attr.name);
      if (bucket == NULL)
        break;
      TreeNode *symNode = NULL;
      symNode = bucket->treeNode;
      if (t->kind.exp == ArrIdK)
      {
        if (t->child[0]->type != Integer)
        {
          fprintf(listing, "Invalid array indexing at line %d (name: \"%s\"). indices should be integer\n", t->lineno, t->attr.name);
          Error = TRUE;
        }
        if (symNode->nodekind == DecK && symNode->kind.dec != ArrVarK)
          typeError(t, "invalid expression");
        else if (symNode->kind.exp == ParaK && symNode->type != Arr)
          typeError(t, "invalid expression");
        else
          t->type = symNode->type;
      }
      else
        t->type = symNode->type;
      break;
    }
    case CallK:
    {
      BucketList bucket = bk_lookup(t->attr.name);
      TreeNode *treeFunc = NULL;
      TreeNode *argument = NULL;
      TreeNode *parameter = NULL;

      if (bucket == NULL)
        break;
      treeFunc = bucket->treeNode;
      argument = t->child[0];
      parameter = treeFunc->child[1];

      if (treeFunc->kind.dec != FuncK)
      {
        typeError(t, "invalid expression");
        break;
      }
      if (parameter->type != Void && argument == NULL)
        typeError(t, "invaild function call");

      while (argument != NULL)
      {
        if (parameter == NULL || parameter->type == Void)
        {
          typeError(argument, "invalid function call");
          break;
        }
        if (parameter->type != argument->type)
        {
          typeError(argument, "invalid function call");
          break;
        }
        else
        {
          argument = argument->sibling;
          parameter = parameter->sibling;
        }
      }
      t->type = treeFunc->type;
      break;
    }
    default:
      break;
    }
    break;
  case DecK:
    switch (t->kind.dec)
    {
    case FuncK:
      if (t->child[1] != NULL && t->child[1]->type != Void)
      {
        TreeNode *parameter = t->child[1];
        while (parameter != NULL)
        {
          if (parameter->type != Integer)
          {
            typeError(parameter, "invalid parameter type");
          }
          if (parameter->sibling != NULL)
            parameter = parameter->sibling;
          else
            break;
        }
      }
      break;
    case VarK:
      if (t->child[0]->type == Void)
      {
        fprintf(listing, "Error: Variable Type cannot be Void at line %d (name : %s)\n", t->lineno, t->attr.name);
        Error = TRUE;
      }
      break;
    case ArrVarK:
      if (t->child[0]->type == Void)
      {
        fprintf(listing, "Error: Array Variable Type cannot be Void at line %d (name : %s)\n", t->lineno, t->attr.name);
        Error = TRUE;
      }
      break;
    default:
      break;
    }
    break;
  }
}

/* Procedure typeCheck performs type checking
 * by a postorder syntax tree traversal
 */
void typeCheck(TreeNode *syntaxTree)
{
  scp_push(globalScp);
  traverse(syntaxTree, preCheck, checkNode);
  scp_pop();
}