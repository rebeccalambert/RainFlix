@favorites.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :length, :category, :overview, :rating, :year, :starring
        json.videoURL url_for(video.video)
        json.thumbnailURL url_for(video.thumbnail)
    end
 end