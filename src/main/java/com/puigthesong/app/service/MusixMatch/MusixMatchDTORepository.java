package com.puigthesong.app.service.MusixMatch;


import com.puigthesong.app.service.dto.MusixMatch.MusixMatch;
import org.springframework.stereotype.Repository;
import retrofit2.Call;
import retrofit2.GsonConverterFactory;
import retrofit2.Retrofit;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Query;

@Repository
public interface MusixMatchDTORepository {

    String url = "http://api.musixmatch.com/ws/1.1/";
    Retrofit retrofit = new Retrofit.Builder()
        .baseUrl(url)
        .addConverterFactory(GsonConverterFactory.create())
        .build();

    @GET("chart.tracks.get")
    Call<MusixMatch> getTopSongs(@Query("page") int page
        , @Query("page_size") int page_size
        , @Query("country") String country
        , @Query("f_has_lyrics") int f_has_lyrics
        , @Query("apikey") String apiKey);

  //  http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc

    @GET("track.search")
    Call<MusixMatch> getTrack(@Query("page") int page
        , @Query("q_artist") String q_artist
        , @Query("page_size") int page_size
        , @Query("track_rating") String track_rating
        , @Query("apikey") String apiKey);



    @GET("artist.search")
    Call<MusixMatch> getArtist(@Query("page") int page
        , @Query("q_artist") String q_artist
        , @Query("page_size") int page_size
        , @Query("apikey") String apiKey);

    //Me falta poner que coja directamente el país del usuario.
    //Tengo obtener artista top por país, pero no el del usuario
    @Headers({
        "Accept-Encoding: identity"

    })

    @GET("chart.artists.get")
    Call<MusixMatch> getTopArtistByCountry(

        @Query("page") int page
        , @Query("page_size") int page_size
        , @Query("country") String country
        , @Query("apikey") String apiKey);


}
