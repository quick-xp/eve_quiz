class Api::QuizHistoryController < Api::ApiController

  def update
    @user_ranking.is_public = params[:is_public]
    @user_ranking.save
    render json: { is_public: @user_ranking.is_public }
  end

  private

  def set_season
    @season = Season
                  .preload(:series)
                  .find_by!(slug: params[:season_id])
  end

end
