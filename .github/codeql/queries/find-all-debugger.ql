/**
 * @name debugger statements
 * @description flag all debugger statements
 * @id fhirq-renderer/find-all-debuggers
 * @tags debugger
 * @kind problem
 * @problem.severity warning
 */

import javascript

from DebuggerStmt ds
select ds, "debugger statement"
