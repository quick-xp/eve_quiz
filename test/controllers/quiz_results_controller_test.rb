require 'test_helper'

class QuizResultsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get quiz_results_index_url
    assert_response :success
  end

end
