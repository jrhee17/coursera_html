class TodoItem < ActiveRecord::Base
  belongs_to :todo_list
  belongs_to :todo_item
  default_scope {order due_date: :asc}
end
