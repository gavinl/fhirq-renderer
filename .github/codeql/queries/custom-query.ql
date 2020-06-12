/**
 * @name TODO
 * @description TODO reminder
 * @id my-custom-queries/find-all-comments
 * @tags comments
 * @kind problem
 * @problem.severity warning
 */

import javascript

from Comment c
where c.getText().regexpMatch("(?si).*\\bTODO\\b.*")
select c.getFile(), "TODO comment $@", c, c.getText()
