require 'test_helper'

class QuizHomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get quiz_home_index_url
    assert_response :success
  end

end
