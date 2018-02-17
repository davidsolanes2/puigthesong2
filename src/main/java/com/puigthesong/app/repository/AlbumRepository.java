package com.puigthesong.app.repository;

import com.puigthesong.app.domain.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data JPA repository for the Album entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {

    //List<Album> findByBand_NameBand(String bandaNombre);
    List<Album> findByBand_Name(String nombreBanda);

    //List<Album> findByBand_NameBandContaining(String bandaNombre);
    List<Album> findByBand_NameContaining(String bandaNombre);
}
