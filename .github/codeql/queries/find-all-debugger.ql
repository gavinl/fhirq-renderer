/**
 * @name debugger statements
 * @description flag all debugger statements
 * @id js/debugger-statements
 * @tags debugger
 * @kind problem
 * @problem.severity warning
 */

import javascript

from DebuggerStmt ds
select ds, "debugger statement"
