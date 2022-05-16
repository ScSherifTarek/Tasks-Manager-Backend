users:
- id
- name

tasks:
- id
- title
- description
- status - default "ToDo"
- created_at
- created_by
- updated_at
- last_updated_by


tasks_logs:
- id
- task_id
- created_at
- old_attributes - json
- new_attributes - json


APIs:
GET /api/v1/tasks -- get tasks
POST /api/v1/tasks -- create tasks




TasksService
+ createTask()
+ 