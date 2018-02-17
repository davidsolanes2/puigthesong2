package com.puigthesong.app.service.MusixMatch;


import com.puigthesong.app.repository.UserExtRepository;
import com.puigthesong.app.repository.UserRepository;
import com.puigthesong.app.security.SecurityUtils;
import com.puigthesong.app.service.dto.MusixMatch.MusixMatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import retrofit2.Call;

import java.io.IOException;


@Service
public class MusixMatchDTOService {

    //https://developer.musixmatch.com/documentation

    public static final String apiKey = "834e902d53b2e87b494431d7fda16e8f";
    MusixMatchDTORepository apiService = MusixMatchDTORepository.retrofit.create(MusixMatchDTORepository.class);

    @Autowired
    private UserExtRepository userExtRepository;

    public MusixMatch getTopSongs(){
        MusixMatch topSongs = null;
        Call<MusixMatch> callTopSongs = apiService.getTopSongs(1, 5, "es", 1,  apiKey);
        System.out.println(callTopSongs);
        try {
            topSongs = callTopSongs.execute().body();
            System.out.println(topSongs);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return topSongs;
    }

    //Top artista por el país del usuario
    //Me falta poner el país del usuario automáticamente
    @Transactional
    public MusixMatch getTopArtist(){
        MusixMatch topArtists = null;
        UserRepository userRepository;

        String iso = userExtRepository.findByUserLogin(SecurityUtils.getCurrentUserLogin()).getCountry().getIso();

        Call<MusixMatch> callTopArtists = apiService.getTopArtistByCountry(1, 1, iso,  apiKey);
        System.out.println(callTopArtists);
        try {
            topArtists = callTopArtists.execute().body();
            System.out.println(topArtists);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return topArtists;
    }


    public MusixMatch getTrack(){
        MusixMatch track = null;
        Call<MusixMatch> callTracks = apiService.getTrack(1, "Justin Bieber", 5,"DESC", apiKey);
        System.out.println(callTracks);
        try {
            track = callTracks.execute().body();
            System.out.println(track);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return track;
    }

    public MusixMatch getArtist(){
        MusixMatch artist = null;
        Call<MusixMatch> callArtists = apiService.getArtist(1,"Prodigy",5 ,apiKey);
        System.out.println(callArtists);
        try {
            artist = callArtists.execute().body();
            System.out.println(artist);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return artist;
    }


}
