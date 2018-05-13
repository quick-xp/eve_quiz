create_table "schema_migrations", collate: "utf8_bin", comment: "" do |t|
  t.varchar "version"
  t.index "version", name: "unique_schema_migrations", unique: true
end

create_table "ar_internal_metadata", collate: "utf8_bin", comment: "" do |t|
  t.varchar :key, primary_key: true
  t.varchar :value

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "questions", collate: "utf8_bin", comment: "" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.text :question
  t.text :hint, null: true
  t.text :comment, null: true
  t.int :status, default: 0
  t.int :created_by, null: true

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "choices", collate: "utf8_bin", comment: "" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :question_id
  t.varchar :choice

  t.datetime :created_at
  t.datetime :updated_at
end
