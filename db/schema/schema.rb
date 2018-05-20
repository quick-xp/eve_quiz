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
  t.int :difficult, default: 1
  t.int :created_by, null: true

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "choices", collate: "utf8_bin", comment: "" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :question_id
  t.boolean :is_correct
  t.varchar :choice

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "question_histories", collate: "utf8_bin", comment: "" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :question_id
  t.int :number
  t.varchar :choice_list
  t.varchar :history_id
  t.int :large_tag_id
  t.int :medium_tag_id, null: true
  t.int :small_tag_id, null: true
  t.int :user_id, null: true
  t.int :user_choice, null: true
  t.boolean :user_is_correct, null: true

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "question_results", collate: "utf8_bin", comment: "" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :question_history_id
  t.int :user_id, null: true
  t.boolean :finished, default: false
  t.int :total_questions_count, default: 0
  t.int :user_correct_count, default: 0
  t.text :comment
  t.varchar :result_text

  t.datetime :created_at
  t.datetime :updated_at
end

create_table "taggings", collate: "utf8_bin" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int  "tag_id"
  t.varchar   "taggable_type"
  t.int  "taggable_id"
  t.varchar   "tagger_type", null: true
  t.int  "tagger_id", null: true
  t.varchar   "context",       limit: 128
  t.datetime "created_at"
  t.index ["context"], name: "index_taggings_on_context"
  t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true
  t.index ["tag_id"], name: "index_taggings_on_tag_id"
  t.index ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context"
  t.index ["taggable_id", "taggable_type", "tagger_id", "context"], name: "taggings_idy"
  t.index ["taggable_id"], name: "index_taggings_on_taggable_id"
  t.index ["taggable_type"], name: "index_taggings_on_taggable_type"
  t.index ["tagger_id", "tagger_type"], name: "index_taggings_on_tagger_id_and_tagger_type"
  t.index ["tagger_id"], name: "index_taggings_on_tagger_id"
end

create_table "tags", collate: "utf8_bin" do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar  "name"
  t.int "taggings_count", default: 0
  t.index ["name"], name: "index_tags_on_name", unique: true
end
